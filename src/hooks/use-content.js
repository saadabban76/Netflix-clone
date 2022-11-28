import axios from '../axios';
import { useState, useEffect } from 'react';

export default function useContent(target) {


    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
          start_year: '1970',
          end_year: '2020',
          min_imdb: '6',
          max_imdb: '7.8',
          genre: 'action',
          language: 'english',
          type: 'movie',
          sort: 'latest',
          page: '1'
        },
        headers: {
          'x-rapidapi-host': 'ott-details.p.rapidapi.com',
          'x-rapidapi-key': '83023072f8msh7856687b476bef9p1c06d1jsn5071e8eec404'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error); 
      });


    const [content, setContent] = useState([]);
    async function fetchData() {
        const request = await axios.get(target);
        setContent(request.data.results)      
    }
    useEffect(()=> {
        fetchData();
    },[])
    return {content};
}