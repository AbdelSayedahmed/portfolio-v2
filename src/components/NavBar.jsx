import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`flex transition-all duration-700 transform ${
        isHome
          ? "flex-col h-screen items-center justify-center"
          : "fixed top-0 w-full bg-white shadow-md"
      }`}
    >
      {isHome && (
        <div className="mb-6">
          <img
            src="./images/logo.png"
            alt="Abdel's Logo"
            className="w-[600px] h-auto"
          />
        </div>
      )}
      <div
        className={`flex gap-6 ${
          isHome
            ? "flex lg:text-[30px] lg:flex-row flex-col text-[24px] text-center" 
            : "p-4 justify-center items-center text-[18px] sm:text-[22px] ml-auto mr-auto"
        }`}
      >
        <Link className="nav-link" to="/aboutme">
          About Me
        </Link>
        <Link className="nav-link" to="/contact">
          Contact Me
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </div>
      {isHome && (
        <div className="text-[20px] sm:text-[24px] text-center font-semibold mt-5">
          <p className="bg-white bg-opacity-20 px-[5px]">
            Practice beats talent
          </p>
          <p className="bg-white bg-opacity-20 px-[5px] italic w-max mx-auto">
            - Unknown
          </p>
        </div>
      )}
    </div>
  );
}
