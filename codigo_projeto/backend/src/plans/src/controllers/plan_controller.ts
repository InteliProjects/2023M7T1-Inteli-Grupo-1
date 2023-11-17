import { Request, Response } from "express";
import { errors } from "../constants/errors";
import getCurrentLine from "get-current-line";
import { plan_services } from "../services/plan_services";
import amqp from 'amqplib';

/**
 * @function list_queue
 * @description Listar planos usando uma fila RabbitMQ.
 * @param {Request} req - O objeto de solicitação do Express.
 * @param {Response} res - O objeto de resposta do Express.
 * @returns {Promise<void>} - Uma Promise que resolve com a lista de planos ou uma resposta de erro.
 */
export const plan_controller = {
  async list_queue(req: Request, res: Response): Promise<void> {
    try {
      // Configurações do servidor RabbitMQ
      const DNS_SERVER = "ec2-50-19-180-155.compute-1.amazonaws.com"; // DNS do servidor RabbitMQ
      const rabbitServer = `${DNS_SERVER}:5672`; // URL do servidor RabbitMQ (pode ser uma URL pública)


      // Conectar ao servidor RabbitMQ
      const connection = await amqp.connect(`amqp://${rabbitServer}`);
      const channel = await connection.createChannel();
      const queueName = "queue-plans"; // Nome da fila usada no front-end e back-end

      // Assegurar que a fila exista (durável)
      await channel.assertQueue(queueName, { durable: true });

      // Enviar uma mensagem para a fila
      const mensagemEnviar = 'Request operations in bank';
      channel.sendToQueue(queueName, Buffer.from(mensagemEnviar));

      // Função para consumir a mensagem e cancelar após o processamento
      const consumeAndCancel = async (): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
          channel.consume(queueName, async (mensagem) => {
            console.log("Consumindo mensagem...");
            if (mensagem) {
              const mensagemRecebida = mensagem.content.toString();
              console.log(`[x] Recebido: ${mensagemRecebida}`);
              
              // Realizar ação de serviço (lista de planos)
              const result = await plan_services.list();

              // Confirmar o recebimento da mensagem
              channel.ack(mensagem);

              // Resolver a Promise com o resultado
              resolve(result);

              // Cancelar o consumo após processar uma mensagem
              channel.cancel(mensagem.fields.consumerTag);
            } else {
              console.log("[x] Nenhuma mensagem disponível na fila.");
              resolve([]); // Se não houver mensagem, retorne um array vazio ou outro valor apropriado
            }
          });
        });
      };

      // Iniciar o consumo da mensagem e cancelar após o processamento
      const results = await consumeAndCancel();

      // Retornar uma resposta HTTP com base no resultado
      res.status(200).json(results);
    } catch (error) {
      // Manipular erros e retornar uma resposta de erro
      return res.status(500).json({
        title: errors.internal_server_error.title,
        description: errors.internal_server_error.description,
        source: {
          line: getCurrentLine(),
          pointer: __filename,
        },
      });
    }
  },

  /**
   * @function list
   * @description Listar planos diretamente sem usar fila.
   * @param {Request} req - O objeto de solicitação do Express.
   * @param {Response} res - O objeto de resposta do Express.
   * @returns {Promise<Response>} - Uma Promise que resolve com a resposta HTTP contendo a lista de planos ou uma resposta de erro.
   */
  async list(req: Request, res: Response): Promise<Response> {
    // Chamar um serviço para listar planos
    const response = await plan_services.list();

    // Retornar a resposta HTTP com base no resultado do serviço
    return res.status(response.status).json(response);
  }
};