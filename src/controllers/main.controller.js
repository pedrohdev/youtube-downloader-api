const fileGetContents = require('file-get-contents')

module.exports = {
    getData: async (id) => {
        let info = await fileGetContents(`https://www.youtube.com/get_video_info?video_id=${id}`)

        for(let i = 0; i < info.split("#").join("&").split("&").length; i++){

            if(info.split("#").join("&").split("&")[i].split('=')[0] == 'player_response'){

                info = await JSON.parse(decodeURIComponent(info.split("#").join("&").split("&")[i].split('=')[1]))
                
                let videos = []

                for(let j = 0; j < info.streamingData.formats.length; j++){
                

                    videos.push({
                        src: info.streamingData.formats[j]['url'],
                        quality: info.streamingData.formats[j].qualityLabel
                    })



                }

                return {"videos": videos}


            }else if(info.split("#").join("&").split("&")[i].split('=')[0] == 'status' && info.split("#").join("&").split("&")[i].split('=')[1] == 'fail'){
                throw 'Video not found'
            }

            
        }

        

    }
}
