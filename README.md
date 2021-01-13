:warning: **Este repositório deve ser utilizado apenas para uso pessoal, baixar material protegido por direitos autorais é contra os [termos de serviço do YouTube](https://www.youtube.com/static?gl=BR&template=terms)**

### Como consumir a API

O consumo da API deve ser feito através de uma requisição do tipo GET passando como parâmetro o ID do vídeo no Youtube: 

```` /api/v1/{id} //Em caso de erro o servidor retorna o status code 500 ```` 

**Exemplo:**
````
http://localhost:3000/api/v1/sTV61xqilso //Neste caso estamos utilizando um ID real de um vídeo

//Retorna

{
  "status": "ok",
  "data": {
    "videos": [
      {
        "src": "https://r1---sn-pmcg-4vge.googlevideo.com/videoplayback?expire=1609973323&ei=6-n1X8SBLfLh1AGpmKGgCw&ip=177.55.111.22&id=o-AIJDNGfwOlTnataPEsQUW0oZfdtozc8woSBrfPa1rZ_R&itag=18&source=youtube&requiressl=yes&mh=aw&mm=31%2C29&mn=sn-pmcg-4vge%2Csn-pmcg-bg06&ms=au%2Crdu&mv=u&mvi=1&pl=24&vprv=1&mime=video%2Fmp4&ns=1TJ_ycwas4-JLIrBjiJWYtQF&gir=yes&clen=4914800&ratebypass=yes&dur=56.192&lmt=1548168730847171&mt=1609950995&fvip=9&c=WEB&txp=2211222&n=M8Tn98s7czdFrhQO&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgZt2pD8E72DXJphvfp3pbUAq-9D-DuHPhG6wWgJFvzCcCIHW9FEXSseBjycySpCRdYrzrF7xR_4dAqH8NI2tklzvs&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgcCLUuLb227dR3ksUmlge16qiZq8Z1hEH_nj2BWlg810CIB86crVQTe5kfP85fUcRhTD3JtqUWyHZVuGfzqeJ18bk",
        "quality": "360p"
      },
      {
        "src": "https://r1---sn-pmcg-4vge.googlevideo.com/videoplayback?expire=1609973323&ei=6-n1X8SBLfLh1AGpmKGgCw&ip=177.55.111.22&id=o-AIJDNGfwOlTnataPEsQUW0oZfdtozc8woSBrfPa1rZ_R&itag=22&source=youtube&requiressl=yes&mh=aw&mm=31%2C29&mn=sn-pmcg-4vge%2Csn-pmcg-bg06&ms=au%2Crdu&mv=u&mvi=1&pl=24&vprv=1&mime=video%2Fmp4&ns=1TJ_ycwas4-JLIrBjiJWYtQF&ratebypass=yes&dur=56.192&lmt=1548169307723230&mt=1609950995&fvip=9&c=WEB&txp=2201222&n=M8Tn98s7czdFrhQO&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIfDxeEKy6v7SLl03Wr4MKV_tXScbGgTIsYRe2huhQCvAIhAMBXaBDfJExt-iEmxxbprjEXDf3p6hkWgBrQMIgkESuM&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgcCLUuLb227dR3ksUmlge16qiZq8Z1hEH_nj2BWlg810CIB86crVQTe5kfP85fUcRhTD3JtqUWyHZVuGfzqeJ18bk",
        "quality": "720p"
      }
    ]
  }
}

````


### Dependências utilizadas

- Express | ```` npm install express --save ````
- fileGetContents | ````  npm install file-get-contents ````
- cors | ```` npm install cors ````
### Andamento
- [x] Estruturação do projeto
- [x] Scraping e filtração dos dados
- [x] Finalização da API
