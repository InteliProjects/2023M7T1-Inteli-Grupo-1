import { Request, Response } from "express";
import shortHash from "short-hash";
import { UrlShortener } from "../utils/UrlShortener";

// Cria uma instância do UrlShortener com a porta do servidor obtida do ambiente.
const shortener = new UrlShortener(parseInt(process.env.SERVER_PORT as string));

export const url_controller = {

    /**
     * Encurta uma URL longa em uma URL curta e a armazena no UrlShortener.
     * 
     * @param req - Objeto de solicitação do Express contendo a URL original no corpo.
     * @param res - Objeto de resposta do Express para enviar a URL curta como JSON.
     */
    shorten(req: Request, res: Response) {
        // Obtém a URL original do corpo da solicitação.
        const originalUrl: string = req.body.url;

        // Gera um hash curto com base na URL original.
        const hash: string = shortHash(originalUrl);

        // Armazena o mapeamento entre o hash e a URL original no UrlShortener.
        shortener.getUrlMap()[hash] = originalUrl;

        // Gera a URL curta completa com base no hash e na porta do servidor.
        const shortUrl: string = `http://localhost:${process.env.SERVER_PORT}/url/${hash}`;

        // Retorna a URL curta como uma resposta JSON.
        res.json({ shortUrl });
    },

    /**
     * Redireciona uma URL curta para sua URL original correspondente, se existir.
     * 
     * @param req - Objeto de solicitação do Express contendo o hash da URL curta nos parâmetros.
     * @param res - Objeto de resposta do Express para redirecionar ou enviar um erro 404.
     */
    redirect(req: Request, res: Response) {
        // Obtém o hash da URL curta dos parâmetros da solicitação.
        const hash: string = req.params.hash;

        // Obtém a URL original correspondente ao hash, se existir.
        const originalUrl: string | undefined = shortener.getUrlMap()[hash];

        // Se uma URL original correspondente for encontrada, redireciona para ela.
        if (originalUrl) {
            res.redirect(originalUrl);
        } else {
            // Caso contrário, envia um erro 404 (URL não encontrada).
            res.status(404).send('URL not found');
        }
    }

}