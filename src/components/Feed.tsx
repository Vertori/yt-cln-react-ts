import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { VideoType } from "../types";

const Feed = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="h-auto md:h-[92vh] border-r border-solid border-[#3d3d3d] px-0 md:px-8">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="text-white hidden md:block">
          Copyright © RF & Youtube
        </div>
      </div>
      <div className="p-8 overflow-y-auto h-[90vh] flex-2">
        <div className="text-white text-3xl mb-8 font-bold">
          {selectedCategory} <span className="text-[#F31503]">videos</span>
        </div>
        {/* fetched videos */}
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
