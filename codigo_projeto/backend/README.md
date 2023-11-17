# Como rodar os microsserviços
Para colocar em execução os microsserviços, é necessário executar alguns comandos:

## Executar a api (o antigo "servidor completo")

na pasta
```Grupo-1\codigo_projeto\backend\src\api```,

execute o comando 
```docker build -t api-image -f Dockerfile.api .```

e em seguida 
```docker run -d -p 8000:8000 api-image```

## Executar o microsserviço de produtos

na pasta
```Grupo-1\codigo_projeto\backend\src\product```,

execute o comando 
```docker build -t product-image -f Dockerfile.product .```

e em seguida 
```docker run -d -p 8001:8001 product-image```