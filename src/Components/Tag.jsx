import React, { useState } from "react";
import axios from "axios";
import {useEffect} from 'react';
import Spinner from "./Spinner";


const API_KEY = '1gmM18OiuKPiirUvDHyYXlb9kKj8CkpY';

const Tag = () => {
  const [tag, setTag] = useState('car');
  const [gif, setGif] = useState('');
  const [loading,setLoading] = useState('false');
  
  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    // console.log(output);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect( () => {
    fetchData();
  },[] );

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event){

    setTag(event.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-white flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="mt-[15px] text-2xl underline uppercase font-extrabold">
        Random Gif
      </h1>
      {
        loading ? (<Spinner/>) :(<img src = {gif} width = "450"/>)
      }
      

      <input className = "w-10/12 text-lg py-2 rounded-lg mb-[20px] text-center " onChange={(event)=>setTag(event.target.value)} value = {tag} />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-white opacity-60 text-lg py-2 rounded-lg mb-[3px] text-center" 
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
