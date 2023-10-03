import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchBox from "./GptMovieSuggestions";
import { IMG_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={IMG_BG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptSearchBox />
    </div>
  );
};

export default GptSearch;
