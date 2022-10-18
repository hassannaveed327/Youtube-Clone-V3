import axios from  'axios' ;

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";//BasicURL

const options = {
  url:  BASE_URL ,
  params: { 
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_FROM_RAPID_API,//Global Variable in .env//
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
//Fetching Api Request--- According to category
export const FetchAPI = async (url) => {
 const {data} = await axios.get(`${BASE_URL}/${url}`,options);
 return data;
}