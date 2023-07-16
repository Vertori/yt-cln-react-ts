import { VideoType } from "../types";
import { VideoCard, ChannelCard } from "./";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {
  videos: VideoType[];
  direction?: CSSProperties["flexDirection"];
};

const Videos = ({ videos, direction }: Props): JSX.Element => {
  if (!videos) {
    return (
      <section className="h-screen flex justify-center items-center ">
        <ClipLoader color={"red"} />
      </section>
    );
  }
  return (
    <div
      className={`flex flex-wrap justify-center lg:justify-start gap-8`}
      style={{ flexDirection: direction || "row" }}
    >
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
