import React from "react";
import hamburger from "/src/assets/bars-solid.svg";
import { Link, useLocation } from "react-router-dom";

const siteLogo =
  "https://storage.googleapis.com/vshine-studio/logos/vshine%20logo%202018.png";

const SiteNav = ({ activeNav, setActiveNav }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="w-full fixed z-[100] px-[22px]">
      <div className="flex items-center justify-between py-2">
        {/* <Link to={"/"}>
          <h2 className="text-white font-serif text-2xl tracking-[2px]">VSHINE STUDIO</h2>
        </Link> */}

        <div></div>

        <div
          className="p-3 relative cursor-pointer -mr-3 drop-shadow-4xl"
          onClick={() => setActiveNav((prev) => !prev)}
        >
          {[0, 1, 2].map((el, i) => (
            <div
              key={i}
              className={`h-[3px]  w-[25px] mb-1 last:mb-0 ${
                pathname === "/" ? "bg-white" : "bg-black"
              }`}
            ></div>
          ))}
          {/* <img className="w-[35px] h-[35px]" src={hamburger} alt="hamburger" /> */}
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
