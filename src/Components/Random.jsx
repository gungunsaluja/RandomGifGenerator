import React, { useState } from "react";
import axios from "axios";
import {useEffect} from 'react';


const API_KEY = '1gmM18OiuKPiirUvDHyYXlb9kKj8CkpY';

const Random = () => {

  const [gif, setGif] = useState('');
  
  async function fetchData(){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    // console.log(output);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource)
  }
  useEffect(()=>{
    fetchData();
  },[]);
  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-400 rounded-lg border border-white flex flex-col gap-y-5 mt-[15px] items-center ">
      <h1 className="text-3xl underline uppercase font-extrabold">
        A Random Gif
      </h1>
      <img src={gif} width="450" />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-white opacity-60 text-lg py-2 rounded-lg "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
