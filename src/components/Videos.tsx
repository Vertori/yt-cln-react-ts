import { VideoType } from "../types";

type Props = {
  videos: VideoType[];
};

const Videos = ({ videos }: Props) => {
  console.log(videos);
  return <div>Videos</div>;
};

export default Videos;
