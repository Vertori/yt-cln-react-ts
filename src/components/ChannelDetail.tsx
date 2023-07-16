import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelDetailType } from "../types";
import { VideoType } from "../types";

const ChannelDetail = (): JSX.Element => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<ChannelDetailType>(
    {} as ChannelDetailType
  );
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  console.log(channelDetail);

  return (
    <div className="min-h-[95vh]">
      <div className="z-10 h-[300px] bg-gradient-to-r from-rose-100 to-teal-100" />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <div className="flex p-8">
        <div className="mr-0 sm:mr-[100px]" />
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
