# Requisitos Funcionais e Não-Funcionais

Este documento corresponde ao que é solicitado no card "Requisitos Funcionais e Não-Funcionais" na Sprint 1.

## Requisitos funcionais

- RF 1:
  O Sistema Loja deve ser capaz de listar todos os produtos disponíveis para compra na página inicial.

- RF 2:
  O Sistema Loja deve fornecer notificações para todas as ações de compra, alteração de dados cadastrais e cadastro.

- RF 3:
  O Sistema Loja deve armazenar em uma lista de compras todos os produtos adicionados no carrinho de compras.

- RF 4:
  O Sistema Loja deve fornecer campo de busca de produtos por nome de produto.

- RF 5:
  O Sistema Loja deve fornecer uma tela para alteração de dados cadastrais.

- RF 6:
  O Sistema Loja deve fornecer recursos de áudio descrição para deficientes visuais.

- RF 7:
  O Sistema Loja deve fornecer disponibilidade para cancelamento da compra no carrinho de compras.

- RF 8:
  O Sistema Loja deve fornecer filtros de categorias de produtos.

- RF 9:
  O Sistema Loja deve ter uma tela de acesso através de login de usuário.

- RF 10:
  O Sistema Loja deve fornecer cadastro para novos usuários em seu primeiro acesso.

## Requisitos Não-funcionais

### Eficiência de Performance:

- RNF 1:
  O Sistema Loja deve ter um tempo mínimo de resposta de 500 milissegundos ao usuário final.

#### Plano de teste

- A equipe de desenvolvimento irá criar testes de caso de performance através do K6, avaliando os resultados obtidos por meio de uma aplicação desses testes desenvolvidos por eles.

<br>

- RNF 2:
  O Sistema Loja deve suportar até 30 mil requisições por segundo.

#### Plano de teste

- A equipe de desenvolvimento irá criar testes de carga através do K6, avaliando os resultados obtidos por meio de uma aplicação desses testes desenvolvidos por eles.

### Usabilidade

- RNF 3:
  O Sistema Loja deve seguir as Heurísticas de Nielsen.

#### Plano de teste

- Será criada uma planilha com os requisitos funcionais para verificar se eles seguem as Heurísticas de Nielsen devidamente, classificando em "NÃO SEGUE" (0 a 3 heurísticas), "SEGUE PARCIALMENTE" (4 a 7 heurísticas) e "SEGUE TOTALMENTE" (8 a 10 heurísticas).

### Confiabilidade

- RNF 4:
  O Sistema Loja é capaz de se auto recuperar de falhas e problemas de rede.

#### Plano de teste

- A equipe de desenvolvimento irá criar casos de teste através de exclusão acidental e corrupção de arquivos para validar backups e assegurar restauração ágil de dados através de AMIs, backups automatizados do RDS, entre outros.

### Segurança

- RNF 5:
  O Sistema Loja deve ser capaz de autenticar o usuário que está logado e garantir a criptografia e autenticidade dos dados.

#### Plano de teste

- A equipe de desenvolvimento irá testar a autenticidade do usuário e de seus dados através do JSON Web Token.
