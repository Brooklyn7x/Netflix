import React from "react";
import logo from "../Image/logo.png";
import userlogo from "../Image/user.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10 w-full ">
      <img className="w-36 h-16" src={logo} alt="logo" />
      {user && (
        <div className="flex">
          <img className="h-10 my-3 px-3" src={userlogo} alt="user_icon" />
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white h-10 my-3 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
