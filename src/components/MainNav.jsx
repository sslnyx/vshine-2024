import React from "react";
import xMark from "/src/assets/close.svg";
import IconEmail from "./IconEmail";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";

const logo =
  "https://storage.googleapis.com/vshine-studio/logos/vshine%20logo%202018_Black.png";

const menuList = [
  {
    link: "/",
    label: "home",
  },
  {
    link: "/wedding",
    label: "wedding",
  },
];

const MainNav = ({ activeNav, setActiveNav }) => {
  return (
    <div className="fixed w-screen h-svh left-0 top-0 z-[101] pointer-events-none">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-500 ${
          activeNav
            ? "opacity-100 pointer-events-auto backdrop-blur-sm"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          setActiveNav(false);
        }}
      ></div>

      <div
        className={`w-[350px] bg-white h-svh absolute top-0 -right-[350px] p-5 transition-[transform] duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-auto ${
          activeNav ? "-translate-x-[350px]" : "translate-x-0"
        }`}
      >
        <div
          className="absolute top-5 right-5 p-3 -mt-3 -mr-3 cursor-pointer"
          onClick={() => {
            setActiveNav(false);
          }}
        >
          <img className="w-[20px] h-[20px]" src={xMark} alt="close" />
        </div>

        <div className="flex flex-col h-full">
          <ul className="mt-[25px]">
            {menuList.map(({ link, label }, i) => (
              <li
                className="uppercase font-serif mb-3 last:mb-0 tracking-[2px] text-3xl"
                key={i}
              >
                <Link to={link} onClick={() => setActiveNav(false)}>
                  {label}
                </Link>
              </li>
            ))}

            <li className="uppercase font-serif py-1 mb-3 last:mb-0 tracking-[2px] text-3xl">
              <span>Contact</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3">
                <Arrow width={35} fill={"#000"} />
              </span>
              <a href="mailto:info@vshinestudio.com">
                <span>info@vshinestudio.com</span>
              </a>
            </li>
          </ul>

          <div className="flex-1"></div>

          <div>
            <div className="mb-5">
              <img width={120} src={logo} alt="logo" />
            </div>

            <p className="mb-0 text-xs">
              A wedding videography studio in Vancouver, VSHINE Studio is known
              for its ability to transform the beauty of real-life moments into
              cinematic works of art. <br /> <br />
              Characterized by a refined use of natural light, VSHINE creates
              wedding films that elevate the everyday into extraordinary,
              capturing the emotion and atmosphere of each unique celebration.
            </p>
            {/* <IconEmail width={25} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
