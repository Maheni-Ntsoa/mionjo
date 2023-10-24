import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import GalleryByEvent from "../../../../components/GalleryByEvent";
import MyVideoGallery from "../../../../components/MyVideoGallery";
import SubTitle from "../../../../components/SubTitle";
import GetEventPhotos from "../../../../usecases/Photo/GetEventPhotos";
import GetVideoByIdGenerale from "../../../../usecases/Video/GetVideoByIdGenerale";

const ImgAndVideos = () => {
  const [changeView, setChangeView] = useState(true);
  const [videos, setVideos] = useState<string[]>([]);
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const listVideos: string[] = [];
      const eventPhoto = await new GetEventPhotos().execute();
      if (eventPhoto) {
        setEvents(eventPhoto);
      }
      const videoByIdGen = await new GetVideoByIdGenerale().execute(0);
      if (videoByIdGen && videoByIdGen && videoByIdGen.length > 0) {
        for (let i = 0; i < videoByIdGen.length; i++) {
          listVideos.push(
            `${process.env.REACT_APP_BACKEND_URL}uploads/videos/${videoByIdGen[i].nomvideo}`
          );
        }
        setVideos(listVideos);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className="flex flex-col gap-2 bg-white py-4 w-screen">
      <div className="flex justify-start items-center mx-8">
        <div>
          <SubTitle title="Galerie" className="text-blue Uppercase" />
        </div>
        <div className="ml-8">
          <div className="rounded-full w-4 h-4 border-blue border-4"></div>
        </div>
        <div className="xl:w-full border-blue border-b-4"></div>
      </div>
      <div className="gap-4">
        {changeView ? (
          <>
            {events.map((event, index) => (
              <div className="" key={index}>
                <GalleryByEvent eventTitle={event} />
              </div>
            ))}
          </>
        ) : (
          <MyVideoGallery videos={videos} />
        )}
      </div>
      <div className="flex justify-center mt-4">
        <Button
          name={`${changeView ? "Voir vidéos" : "Voir photos"}`}
          onClick={() => setChangeView(!changeView)}
        />
      </div>
    </div>
  );
};

export default ImgAndVideos;
