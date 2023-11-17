# Instruções - Configuração ambientes

## Backend
1. **Configurar variáveis no backend de conexão com o banco** 
    Há dois arquivos de conexão: 
     - ``backend/src/config/config.json`` - os campos host e password devem ser alterados 
     - ````backend/.env```` - nele os campos nodemailer podem ser ignorados por enquanto.
2. **Rodar o migrations**
    Entrar na pasta src e rodar o comando ````sequelize db:migrate ````

## Frontend
No frontend, só é necessário mudar o arquivo ```src/config/config.ts```, colocando a rota do backend no lugar da variável ```API_URL```