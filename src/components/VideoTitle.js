import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-20 absolute text-blue-200 bg-gradient-to-r from-black ">
      <h1 className="font-bold px-2 text-4xl">{title}</h1>
      {/* <p className="py-6 text-lg w-1/4">{overview}</p> */}

      <div className=" py-10  ">
        <button className="bg-gray-500 text-black p-4 px-8 text-xl  rounded-md mx-2 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className=" bg-gray-500 text-black p-4 px-8 text-xl  rounded-md bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
