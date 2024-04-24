import React, { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY = '1gmM18OiuKPiirUvDHyYXlb9kKj8CkpY';

const Random = () => {
  // we can use axios to call api instead of using fetchdata axios is more secure than it 
  // axios me data json format me hi aata hai

  // const [gif, setGif] = useState('');
  // const [loading,setLoading] = useState('false');

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   // console.log(output);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  // apifetch krne ke liye best way useeffect hook ko use karna hai
  // random component ke render hone ke bad render karna kyukii.. or sirf phle render par call karna hai
  // useEffect( () => {
  //   fetchData();
  // },[] );
  // 
  const { gif, loading, fetchData } = useGif();
  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-400 rounded-lg border border-white flex flex-col gap-y-5 mt-[15px] items-center">
      <h1 className="mt-[15px] text-2xl underline uppercase font-extrabold">
        A Random Gif
      </h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }

      <button
        onClick={clickHandler}
        className="w-10/12 bg-white opacity-60 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
