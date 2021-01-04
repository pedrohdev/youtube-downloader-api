### Como consumir a API

O consumo da API deve ser feito através de uma requisição do tipo GET passando como parâmetro o ID do vídeo no Youtube: 

```` /v1/api/{id} //Em caso de erro o servidor retorna o status code 500 ```` 

### Dependências utilizadas

- Express | ```` npm install express --save ````
- fileGetContents | ````  npm install file-get-contents ````

### Andamento
- [x] Estruturação do projeto
- [x] Scraping e filtração dos dados
- [x] Finalização da API
