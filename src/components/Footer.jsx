import React from "react";
import { ImFacebook, ImInstagram, ImTwitter, ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className=" w-full h-[150px] flex justify-between bg-zinc-700 text-white px-4">
      <div>
        <h5 className="px-2 m-5 ">Hit us up on our socials!</h5>
        <div className=" flex">
          <a className="w-[40px] h-[40px]" href="https://www.devmountain.com" target="_blank">
            <div className="w-[50px] h-[50px] rounded-full bg-teal-700 px-3 ml-2">
            <ImFacebook size="1.5em" color="#3f3f3f" />
            </div>
          </a>
          <a href="https://www.devmountain.com" target="_blank">
            <div className="w-[50px] h-[50px] rounded-full bg-teal-700 px-2 ml-7">
            <ImInstagram size="1.5em" color="#3f3f3f" />
            </div>
          </a>
          <a href="https://www.devmountain.com" target="_blank">
            <div className="w-[50px] h-[50px] rounded-full  bg-teal-700 px-3 ml-2">
            <ImTwitter size="1.5em" color="#3f3f3f" />
            </div>
          </a>
          <a href="https://www.devmountain.com" target="_blank">
            <div className="w-[50px] h-[50px] rounded-full  bg-teal-700 px-3 ml-2">
            <ImGithub size="1.5em" color="#3f3f3f" />
            </div>
          </a>
        </div>
      </div>
      <svg
        width="110"
        height="110"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-5"
      >
        <circle cx="256" cy="256" r="248" stroke="#25AAE1" stroke-width="16" />
        <path
          d="M255 222L203 132.5L83.9282 338H233L331 168L427.675 338.571L317.5 338.5"
          stroke="#25AAE1"
          stroke-width="16"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </footer>
  );
};

export default Footer;
