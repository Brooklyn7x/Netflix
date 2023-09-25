import React from "react";
import Header from "./Header";
import { useState } from "react";

const Loginn = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" w-4/12  p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-zinc-700 rounded-md"
          />
        )}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-4 my-4 w-full bg-zinc-700 rounded-md"
          />
        )}
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already User ? Sign In Now.  "}
        </p>
      </form>
    </div>
  );
};

export default Loginn;
