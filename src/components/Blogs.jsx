import React from "react";
import CardSection from "./CardSection";
// import VideoPlayer from './VideoPlayer'
import festivalData from "./../data/data.json";

const Blogs = () => {
  return (
    <div>
      {/* <VideoPlayer /> */}
      <CardSection
        className="flex space-x-4 justify-evenly flex-wrap h-auto bg-white py-8 "
        data={festivalData}
      />
    </div>
  );
};

export default Blogs;
