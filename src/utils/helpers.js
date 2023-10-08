import axios from "axios"

const options = {
    params: {geo: 'TR',lang:'tr'},
    headers: {
      'X-RapidAPI-Key': 'e3b791e57dmsh524047602f20941p10752ajsn526e37223fc5',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };

  axios.defaults.baseURL='https://yt-api.p.rapidapi.com'

// verdiğimiz URL'e istek atıp verileri geri döndüren bir fonksiyon

export const getData = async(url) =>{
    try {
        const response = await axios.get(url,options)
        return response
    } catch (error) {

        console.log('verileri çekerken bir hata oluştu.')
        
    } 
}