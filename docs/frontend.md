# Front-end da Aplicação

Como parte da avaliação da segunda sprint abaixo é explicado o funcionamento geral do front-end, seguido de uma descrição de cada tela.

## Funcionamento Geral

O front-end é feito em ReactJS e abrange várias telas principais: Login e Registro, Confirmação de Registro, Catálogo de Produtos, Detalhes do Produto, Carrinho de Compras e Verificação OTP. Cada tela desempenha um papel específico na experiência do usuário, permitindo login, registro, exploração de produtos, compra e verificação de identidade.

Aqui está uma descrição detalhada de cada tela do front-end:

### Tela de Login (`Login.tsx`)

#### Rota: "/login"

- Nesta tela, os usuários podem inserir seu e-mail e senha para fazer login.
- O front-end realiza validações no lado do cliente para garantir que os campos sejam preenchidos corretamente.
- Se ocorrer um erro durante o login, uma mensagem de erro será exibida.
- Os usuários podem optar por "Continuar conectado" usando uma caixa de seleção.
- Eles também têm a opção de fazer login usando sua conta do Google ou fazer o cadastro caso não tenha uma conta.

### Tela de Registro (`Register.tsx`)

#### Rota: "/register"

- Nesta tela, os usuários podem criar uma nova conta fornecendo seu nome, e-mail e senha.
- O front-end realiza várias validações, como verificação de e-mail válido e senha com pelo menos 8 caracteres.
- Se o e-mail já estiver em uso, uma mensagem de erro será exibida.
- Os usuários podem optar por fazer login com uma conta do Google.
- Após o registro bem-sucedido, o usuário é redirecionado para a tela de confirmação.

### Tela de Confirmação de Registro (`ConfirmRegistration.tsx`)

#### Rota: "/confirm-registration"

- Nesta tela, os usuários são informados de que um e-mail de verificação foi enviado para sua caixa de entrada.
- Eles são incentivados a verificar seu e-mail e seguir as instruções para ativar sua conta.
- Os usuários podem selecionar sua função (vendedor ou consumidor) e inserir sua data de nascimento.
- Há um link para os termos de serviço.
- Após a confirmação, os usuários são redirecionados para a tela de parabéns.

### Tela de Parabéns (`Congrats.tsx`)

#### Rota: "/congrats"

- Nesta tela, os usuários recebem uma mensagem de congratulações após a confirmação de registro.
- Eles são informados de que um e-mail de verificação foi enviado para sua caixa de entrada.
- Há um botão "Fazer Login" que permite ao usuário fazer login após a confirmação, esse botão direciona ao email cadastrado um código de verificão de dois fatores e leva ele a tela de verificação.

### Tela de Verificação OTP (`Confirm.tsx`)

#### Rota: "/confirm-email"

- Nesta tela, os usuários inserem um código OTP (One-Time Password) para verificar sua identidade.
- Após a verificação bem-sucedida, os usuários são redirecionados para a página inicial.

### Tela do Catálogo de Produtos(Main) (`Catalog.tsx`)

#### Rota: "/"

- Nesta tela, os usuários podem pesquisar produtos por nome.
- A pesquisa é realizada em tempo real à medida que o usuário digita no campo de pesquisa.
- Os produtos filtrados são exibidos abaixo da barra de pesquisa.
- Os usuários podem navegar pelas categorias de produtos.

### Tela Product Detail (`ProductDetails.tsx`)

#### Rota: "/product" ou "/product/id"

Esta tela exibe detalhes de um produto específico. Ela recebe um parâmetro de rota `id` que corresponde ao ID único do produto a ser exibido.

- A tela exibe uma imagem do produto, seu nome, descrição e preço unitário.
- Os usuários podem escolher a quantidade desejada do produto usando botões de aumento e diminuição.
- O preço total é atualizado automaticamente com base na quantidade escolhida.
- Os usuários podem adicionar o produto ao carrinho clicando no ícone do carrinho.
- A tela utiliza o estado do React para gerenciar a quantidade selecionada do produto.

### Tela Cart (`Cart.tsx`)

#### Rota: "/cart"

Esta tela exibe os itens no carrinho de compras.

- Os itens no carrinho são carregados, possivelmente a partir de uma API, e exibidos na forma de uma lista.
- Cada item inclui informações como nome, quantidade, preço unitário e preço total.
- O total de todos os itens no carrinho é calculado e exibido.
- Os usuários podem finalizar a compra clicando no botão "CHECK OUT".
- A tela utiliza o estado do React para gerenciar os itens no carrinho e calcular o total.

