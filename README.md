### Como consumir a API

O consumo da API deve ser feito através de uma requisição do tipo GET passando como parâmetro o ID do vídeo no Youtube: 

```` /v1/api/{id} //Em caso de erro o servidor retorna o status code 500 ```` 

**Exemplo:**
````
http://gotube-api-com.umbler.net/v1/api/EW7m2WIvFgQ //Neste caso estamos utilizando um ID real de um vídeo

//Retorna

{
  "status": "ok",
  "data": {
    "videos": [
      {
        "src": "https://r3---sn-cgpn5oxu-wqvs.googlevideo.com/videoplayback?expire=1609804858&ei=2lfzX4HBG8_0xQTviZ6gDg&ip=187.19.248.252&id=o-AIXfMYWY928qjTb2hZwRD-pHUT7TW-LtWa836U6Y0-h4&itag=18&source=youtube&requiressl=yes&mh=s1&mm=31%2C29&mn=sn-cgpn5oxu-wqvs%2Csn-gpv7ener&ms=au%2Crdu&mv=m&mvi=3&pl=24&initcwndbps=943750&vprv=1&mime=video%2Fmp4&ns=1C86nUjEIqkTl6Aj526KJ3EF&gir=yes&clen=72040956&ratebypass=yes&dur=1867.766&lmt=1604900132706607&mt=1609782997&fvip=3&c=WEB&txp=6410222&n=dPs6LN7avfu9r9tg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAIwSxeDcoEW5A_jyH7c5UDltPtQhQ723J5La2VQUxv80AiEAkjphHsjQPiPL20w9m5O1y_1NpgskxpVA_J8xXABljR4%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAPyJNvEuM1yfuvLG-TrAl6ESKhdgXF-BQKrub0bkH1lAAiEAtqzmQdnCR0wzdyDFK4-qMVNrIxDLCiwTih9UFj-4vos%3D",
        "quality": "360p"
      },
      {
        "src": "https://r3---sn-cgpn5oxu-wqvs.googlevideo.com/videoplayback?expire=1609804858&ei=2lfzX4HBG8_0xQTviZ6gDg&ip=187.19.248.252&id=o-AIXfMYWY928qjTb2hZwRD-pHUT7TW-LtWa836U6Y0-h4&itag=22&source=youtube&requiressl=yes&mh=s1&mm=31%2C29&mn=sn-cgpn5oxu-wqvs%2Csn-gpv7ener&ms=au%2Crdu&mv=m&mvi=3&pl=24&initcwndbps=943750&vprv=1&mime=video%2Fmp4&ns=1C86nUjEIqkTl6Aj526KJ3EF&ratebypass=yes&dur=1867.766&lmt=1604933310166762&mt=1609782997&fvip=3&c=WEB&txp=5516222&n=dPs6LN7avfu9r9tg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgGcc_8C_qeLh5Crdbd2CnSzrODjeNOUtvyNokCqtFDe4CIQDezfdYyYQ_bHwCWesfQjZm_P1x5uepccxyQ4LpEdQN0w%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAPyJNvEuM1yfuvLG-TrAl6ESKhdgXF-BQKrub0bkH1lAAiEAtqzmQdnCR0wzdyDFK4-qMVNrIxDLCiwTih9UFj-4vos%3D",
        "quality": "720p"
      }
    ]
  }
}

````


### Dependências utilizadas

- Express | ```` npm install express --save ````
- fileGetContents | ````  npm install file-get-contents ````

### Andamento
- [x] Estruturação do projeto
- [x] Scraping e filtração dos dados
- [x] Finalização da API
