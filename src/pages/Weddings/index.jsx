import React, { useState } from "react";
import { videoData } from "./videoData";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Arrow from "../../components/Arrow";
import VideoModal from "./VideoModal";
// import "./styles.css"

const Weddings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1.5, spacing: 10, origin: "center" },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      console.log("init");
      setLoaded(true);
    },
  });

  return (
    <div className="h-svh flex items-center">
      <div className="navigation-wrapper w-full relative flex justify-center">
        <div ref={sliderRef} className="keen-slider">
          {videoData.map(({ id, title, videoUrl, thumbnailUrl }, i) => (
            <div
              key={id}
              className={`keen-slider__slide number-slide${i} pt-[calc(3/4*100%)] md:pt-[calc(1/3*100%)] relative`}
            >
              <img
                src={thumbnailUrl}
                alt="thumbnail"
                className="absolute top-0 left-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute container w-full h-full pointer-events-none">
          <h2 className="absolute -top-10">{videoData[currentSlide].title}</h2>
          <div
            className="bg-black rounded-full w-[120px] h-[120px] flex justify-center items-center absolute right-5 md:right-16 -bottom-[150px] pointer-events-auto md:bottom-5 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <h2 className="text-white font-serif text-2xl ">Play</h2>
          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className="container flex gap-10 absolute -bottom-12 w-full">
            <Arrow
              width={35}
              fill={"#000"}
              className="rotate-180 cursor-pointer"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
            />

            <Arrow
              // left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              // disabled={currentSlide === 0}
              className="cursor-pointer"
              fill={"#000"}
              width={35}
            />
          </div>
        )}
      </div>

      {openModal && (
        <VideoModal
          videoData={videoData[currentSlide]}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default Weddings;
