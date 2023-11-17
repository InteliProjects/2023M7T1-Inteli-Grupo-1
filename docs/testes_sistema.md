# Testes do Sistema

Este documento corresponde ao que é solicitado no card "Testes do Sistema" na Sprint 4.

## Testes Unitários
Front End 
Os testes unitários foram realizados com o intuito de:

 - verificar se os componentes estão sendo renderizados corretamente;
 - verificar se os dados inputados foram enviados corretamente;

Componentes:
Com o uso do Jest, os componentes da aplicação foram testadas 1 por 1, com o uso do metodo render. Foram verificados os componentes:
 - CartList
 - Item do barItem;
 - Categories;
 - ChooseMachine;
 - ChoosePlan;
 - ProductsList.

Em relação aos dados incluídos na tela de criação de Endereço, e na tela de Login ao serem criados seguem o fluxo esperado, mantendo a integridade das informações.

## Testes De Integração

Os Testes de Integração desempenham um papel crucial na garantia da qualidade do sistema, permitindo que avaliemos como diferentes partes do sistema interagem entre si. Neste documento, descrevemos nossa abordagem para realizar testes de integração, utilizando a ferramenta Postman para testar todas as APIs envolvidas no projeto. Além disso, detalhamos como documentamos os testes e os resultados obtidos por meio das respostas HTTP das APIs testadas.

### Objetivo

O objetivo dos Testes de Integração é verificar se os componentes individuais do sistema funcionam harmoniosamente quando combinados, assegurando que as APIs interajam corretamente e cumpram as especificações definidas.

### Ferramenta de Teste

Utilizamos o Postman como nossa ferramenta principal para realizar os Testes de Integração. O Postman oferece uma interface amigável que permite a criação e a execução de solicitações HTTP de forma eficiente, bem como a automação de testes. Ele também facilita a documentação dos testes e dos resultados obtidos.

### Abordagem de Teste

Nossa abordagem de teste de integração consiste nos seguintes passos:

1. Identificação das APIs: Primeiro, identificamos todas as APIs que estão envolvidas no sistema e que precisam ser testadas em conjunto.

2. Criação de Casos de Teste: Para cada API, criamos casos de teste no Postman. Isso inclui a definição das solicitações HTTP, parâmetros, cabeçalhos e payloads necessários.

3. Execução dos Testes: Executamos os casos de teste no Postman, que enviam as solicitações HTTP para as APIs correspondentes.

4. Avaliação das Respostas: Analisamos as respostas HTTP recebidas das APIs para verificar se estão de acordo com as expectativas. Isso inclui a validação dos dados retornados, códigos de status HTTP e qualquer outra condição de sucesso ou falha definida.

5. Documentação dos Resultados: Documentamos cuidadosamente os resultados dos testes, registrando as respostas HTTP, as datas das execuções e quaisquer problemas identificados.

6. Tratamento de Erros: Se encontrarmos problemas ou falhas durante os testes, registramos essas informações e trabalhamos com a equipe de desenvolvimento para resolver os problemas.

Acesse aqui os [Testes de Integração](https://documenter.getpostman.com/view/28475721/2s9YJW5knh)

## Testes De MicroServiços
