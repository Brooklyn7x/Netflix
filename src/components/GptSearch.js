import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchBox from "./GptMovieSuggestions";
import { IMG_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className="h-screen object-cover md:h-full" src={IMG_BG} alt="logo" />
      </div>
      <div className=" pt-[30%] md:p-0">
        <GptSearchBar />
        <GptSearchBox />
      </div>
    </>
  );
};

export default GptSearch;
