import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import MyImageGallery from "../../../../components/MyImageGallery";
import MyVideoGallery from "../../../../components/MyVideoGallery";
import SubTitle from "../../../../components/SubTitle";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";
import GetVideoByIdGenerale from "../../../../usecases/Video/GetVideoByIdGenerale";

// const images = [
//   "/assets/images/nestjs.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
// ];

// const videos = [
//   "/assets/videos/videoTest.mp4",
//   "/assets/videos/v2.mp4",
//   "/assets/videos/videoTest.mp4",
// ];

const ImgAndVideos = () => {
  const [changeView, setChangeView] = useState(true);
  const [photos, setPhotos] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const listImages: string[] = [];
      const listVideos: string[] = [];
      const photoByIdGen = await new GetPhotoByIdGenerale().execute(0);
      if (photoByIdGen && photoByIdGen.length > 0) {
        for (let i = 0; i < photoByIdGen.length; i++) {
          listImages.push(
            `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${photoByIdGen[i].nomphoto}`
          );
        }
        setPhotos(listImages);
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
        {/* <div> */}
        {/* <img
            src="/assets/icons/ic_actualite.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          /> */}
        {/* </div> */}
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
          <MyImageGallery images={photos} />
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
