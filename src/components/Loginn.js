import React from "react";
import Header from "./Header";

const Loginn = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" w-3/12  p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4 ">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-zinc-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-zinc-700 rounded-md"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4">New to netflix ? Sign Up</p>
      </form>
    </div>
  );
};

export default Loginn;
