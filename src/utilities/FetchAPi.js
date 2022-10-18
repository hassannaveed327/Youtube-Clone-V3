import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':  '18b154eb2cmsh5ff986c4f2b9168p1faf1fjsn71139914d57d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const FetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};