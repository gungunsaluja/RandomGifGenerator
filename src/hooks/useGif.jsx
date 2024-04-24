import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY = '1gmM18OiuKPiirUvDHyYXlb9kKj8CkpY';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const useGif = (tag) => {
    // const [tag, setTag] = useState('car');
    const [gif, setGif] = useState('');

    const [loading,setLoading] = useState('false');
    

    async function fetchData(tag){
      setLoading(true);
      
      const {data} = await axios.get(tag?`${url}&tag=${tag}`:url);
      // console.log(output);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect( () => {
      fetchData('car');
    },[] );
  return {gif,loading,fetchData};
  
    
  };
  
  

export default useGif
