# Análise de Gestão de Custo

### Receita 

A proposta elaborada não possui uma fonte de receita direta, visto que se trata de um projeto focado em  campanhas de marketing. Para realizar a avaliação financeira detalhada, seria necessário obter acesso a informações altamente confidenciais da Stone, as quais não nos foram disponibilizadas.

### Orçamento total

Cada um dos membros que compõem o grupo dispõe de um saldo individual de 100 dólares em créditos na plataforma da AWS, somando assim um montante coletivo de 800 dólares destinado para utilização dentro da plataforma AWS. O orçamento foi disponibilizado para que a equipe consiga fazer testes reais dentro da plataforma.

Contudo, foi preciso adicionar novas contas com créditos, uma vez que o total coletivo de 800 dólares não se mostrou adequado para cobrir os testes ao longo das sprints.

### Custos

#### Métodos de pagamento AWS

Existem 4 métodos de pagamento disponiveis na AWS (Compute Savings Plans, On demand, Spot Instances e EC2 Instance Savings Plans). No caso do projeto elaborado, por se tratar de um MVP, a melhor opção é o pagamento sob demanda porque ele oferece a flexibilidade necessária para ajustar os recursos de acordo com as necessidades variáveis do projeto em sua fase inicial. O pagamento sob demanda permite que você comece com uma base mínima de recursos e aumente gradualmente à medida que a demanda do MVP cresce.

O modelo de pagamento sob demanda é especialmente vantajoso quando se trabalha em um MVP, onde as estimativas iniciais de uso podem variar e evoluir rapidamente à medida que o projeto é refinado e desenvolvido. Não há necessidade de se comprometer com um contrato de longo prazo ou investir em recursos que possam não ser completamente utilizados no estágio inicial. Além disso, a abordagem de pagamento sob demanda alinha-se perfeitamente com os princípios ágeis e iterativos comuns na construção de um MVP.

No entanto, é importante monitorar de perto seus custos e considerar a transição para outras opções de pagamento, como Instâncias Reservadas ou Planos de Economia de Computação no caso de uso do projeto por parte da empresa. Essas opções podem proporcionar economias substanciais a longo prazo, à medida que você adquire mais previsibilidade em relação ao uso de recursos.

### Custo dos Serviços utilizados (Manutenção) 

Primeiramente, é essencial realizar a enumeração dos serviços da AWS que foram empregados no projeto. São eles:

1. **EC2 (Elastic Compute Cloud)**
    A AWS cobra pelos serviços EC2 com base no tempo de execução das instâncias. Você paga por hora ou segundo, dependendo da instância escolhida. Além disso, outros fatores como o tipo de instância, a região da AWS, e o uso de recursos adicionais podem influenciar o custo total. Existem modelos de preços sob demanda, reservados e spot, cada um com abordagens diferentes para a cobrança. O modelo sob demanda é pago conforme o uso, os reservados oferecem descontos para compromissos de longo prazo, e os spot são instâncias temporárias com preços variáveis.


- **Elastic Load Balancing (ELB)**
    A AWS cobra pelo Elastic Load Balancer (ELB) com base no tempo em que o balanceador está ativo e na quantidade de dados processados por meio dele. Existem diferentes tipos de ELB (Classic Load Balancer, Application Load Balancer, Network Load Balancer), cada um com modelos de preços específicos. A cobrança também pode depender da região da AWS em que o ELB está configurado. Em resumo, os custos estão associados à utilização do serviço e à escolha do tipo de balanceador.
 
- **Auto Scaling**
    A AWS cobra pelo Auto Scaling com base na quantidade de instâncias lançadas ou terminadas automaticamente em resposta às alterações na carga de trabalho. Os custos envolvem as instâncias EC2 gerenciadas pelo Auto Scaling e outros recursos associados, como Elastic Load Balancers. O modelo de preços é orientado pelo uso efetivo e pode variar conforme a região da AWS e a configuração específica do Auto Scaling.

- **ECR**
    A AWS cobra pelo Amazon Elastic Container Registry (ECR) com base na quantidade de dados armazenados em seus repositórios privados de contêineres Docker. Os custos estão associados à capacidade de armazenamento utilizada, medidos em gigabytes (GB) ou terabytes (TB) por mês. Portanto, a cobrança é determinada pelo volume total de imagens de contêineres mantidas nos repositórios do ECR.


- **EKS**
    A AWS cobra pelo Amazon Elastic Kubernetes Service (EKS) com base na quantidade de recursos de computação e armazenamento utilizados para os clusters EKS. Os custos envolvem instâncias EC2, armazenamento e outros recursos associados ao dimensionamento do cluster. Além disso, podem haver taxas adicionais para serviços complementares. O modelo de preços do EKS é orientado pelo uso efetivo, e a cobrança é calculada conforme a quantidade e o tipo de recursos consumidos pelo cluster Kubernetes gerenciado.


- **Cloudfront**
    A AWS cobra pelo Amazon CloudFront com base no uso de dados transferidos e na localização geográfica dos usuários finais. Os custos são determinados pela quantidade de dados entregue através da CDN (Content Delivery Network) e pela região em que ocorre a distribuição. Há variação de preços entre as regiões, e as taxas podem ser diferentes para transferências de dados dentro e fora da AWS. Em resumo, a cobrança do CloudFront é influenciada pelo volume e pela localização geográfica do tráfego de dados.


- **VPC**
    A AWS não cobra especificamente pelo uso da Amazon Virtual Private Cloud (VPC) em si. A criação e configuração de uma VPC são geralmente gratuitas. No entanto, a utilização de recursos dentro da VPC, como instâncias EC2, bancos de dados, e outros serviços, está sujeita às taxas normais associadas a esses recursos. Portanto, a cobrança da VPC é indireta e depende do consumo de recursos alocados dentro dela.



| Serviço                                  | Detalhes técnicos                             | Custo (dólares)  |
| ---------------------------------------- | ------------------------------------- | ------------ |
| EC2 (Elastic Compute Cloud)                      | Sistema Operacional: Ubuntu         | $22.42 por mês (0.03114 * 24 horas * 30 dias)   |
| Elastic Load Balancing (ELB)     | Revisão e otimização da arquitetura   | $22.42 por mês (0.03114 * 24 horas * 30 dias)    |
| Auto Scaling          | -       | Não há custo adicional para o AWS Auto Scaling   |
| ECR                      | -         | $4 por mês    |
| EKS                          | - | $0.10 por hora     |
| Cloudfront                          | 10TB | $0.085 por GB   |
| VPC                          | Cobrança por Nat Gateway |  $0.045 por hora  |

**Cotação do dólar: R$ 5,16 (04/10/2023)*



# Custos de desenvolvimento

Também é fundamental calcular os custos associados à prestação do serviço de desenvolvimento da aplicação a fim de garantir uma estimativa abrangente.

1. **Duração do projeto** - O tempo de desenvolvimento da solução foi de 10 semanas (divididas em 5 Sprints). 


2. **Salário de cada desenvolvedor** - Baseado na média salarial de um gerente de projetos júnior, conforme informações disponíveis em https://www.glassdoor.com.br/Sal%C3%A1rios/gerente-de-projetos-j%C3%BAnior-sal%C3%A1rio-SRCH_KO0,26.htm

3. **Custos relacionados à manutenção do projeto** - Neste caso, o custo para manutenção é composto pelos custos cobrados pela AWS sobre a alocação da infraestrutura (armazenamento, poder computacional, etc.) em nuvem utilizada no projeto.

4. **Horas totais** - Considerando o plano da faculdade para este módulo e descontando os dias de encontros com o cliente e as Sprints Planning, temos 232h 30min disponíveis para a realização do estudo e desenvolvimento do projeto.

5. **Remuneração por hora** - Com base no salário total de cada desenvolvedor e na quantidade total de horas trabalhadas, a remuneração por hora para cada gerente de projetos júnior é de R$ 53,72.

6. **Custo total de desenvolvimento do projeto** - A soma de todos os custos com salários resulta em um custo total de R$ 91.142,10.

| Item                                      | Descrição                             | Valor       |
| ----------------------------------------- | ------------------------------------- | ----------- |
| Duração do projeto                        | 10 semanas                           |      -      |
| Número de integrantes no time             | 7 desenvolvedores                    |    -        |
| Salário mensal de cada desenvolvedor (júnior)   | Média salarial do mercado**           | R$ 7.400,00  |
| Horas disponíveis                          |                                     |  232h 30min  |
| Remuneração por hora                      | Salário mensal * 2 meses  / horas totais          |   R$ 63,66  |
| Custo de desenvolvimento do projeto       | Salários * horas trabalhadas          | R$ 103.600,00|

**Fonte: https://www.glassdoor.com.br/Sal%C3%A1rios/desenvolvedor-j%C3%BAnior-sal%C3%A1rio-SRCH_KO0,20.htm#:~:text=A%20m%C3%A9dia%20salarial%20de%20Desenvolvedor,%24%202.090%20e%20R%24%208.580 (Glassdoor) 

