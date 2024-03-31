import React, { useState } from "react";

const Random = () => {
  const [gif, setGif] = useState("");
  function clickHandler() {}

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
