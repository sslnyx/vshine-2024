import React from "react";
import Arrow from "../../components/Arrow";
import { Link } from "react-router-dom";

const showReel =
  "https://storage.googleapis.com/isquarestudio/vshine/21_22_reel-m.mp4";

const siteLogo =
  "https://storage.googleapis.com/vshine-studio/logos/vshine%20logo%202018.png";

const Home = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/0 pointer-events-none"></div>

      <div className="w-screen h-svh">
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          playsInline
        >
          <source type="video/mp4" src={showReel} />
        </video>
      </div>

      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <img
          width={120}
          src={siteLogo}
          alt="siteLogo"
          className=" drop-shadow-4xl"
        />

        {/* <h2 className="text-white font-serif tracking-[2px] text-5xl">VSHINE STUDIO</h2> */}
      </div>

      <div className="container relative justify-center flex items-center drop-shadow-4xl">
        <Link
          to="wedding"
          className="absolute bottom-10 flex flex-col items-center"
        >
          <div className="text-white mb-2 text-[14px] italic">Wedding</div>
          <div className="rotate-90">
            <Arrow width={35} />
          </div>
        </Link>
      </div>

      {/* <h2>kk</h2> */}
    </div>
  );
};

export default Home;
