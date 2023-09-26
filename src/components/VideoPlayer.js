import React from "react";
import video from "../Introduction to Indian Cultural Heritage –Indian Culture and Tradition _ General Awareness Series.mp4";

const VideoPlayer = () => {
  return (
    <div className="">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="m-[100px] h-[400px] w-full"
      />
    </div>
  );
};

export default VideoPlayer;
