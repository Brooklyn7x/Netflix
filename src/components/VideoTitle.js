import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="">
        <button className="bg-green-300 text-black p-4 px-10 text-xl h-14 rounded-md bg-opacity-50 mx-2">
          ▶️ Play
        </button>
        <button className="bg-green-300 text-black p-4 px-10 text-xl h-14 rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
