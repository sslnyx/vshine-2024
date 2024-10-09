import React from "react";

const VideoModal = ({ videoData, setOpenModal }) => {
  return (
    <div className="fixed top-0 left-0 h-svh w-screen flex justify-center items-center">
      <div
        className="w-full h-full bg-black/90 absolute top-0 left-0"
        onClick={() => setOpenModal(false)}
      ></div>

      <video className="w-full relative" autoPlay controls playsInline>
        <source type="video/mp4" src={videoData.videoUrl} />
      </video>
    </div>
  );
};

export default VideoModal;
