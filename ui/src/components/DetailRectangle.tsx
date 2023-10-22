import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Generalec from "../models/Generalec";
import GetDocumentByIdGenerale from "../usecases/Document/GetDocumentByIdGenerale";
import GetPhotoByIdGenerale from "../usecases/Photo/GetPhotoByIdGenerale";
import GetVideoByIdGenerale from "../usecases/Video/GetVideoByIdGenerale";
import { formatDateOnly } from "../utils/formatDate";
import ButtonImage from "./ButtonImage";
import MyVideoGallery from "./MyVideoGallery";
import Loading from "./Loading";

interface DetailRectangleProps {
  generalec: Generalec;
}

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const DetailRectangle: React.FC<DetailRectangleProps> = ({ generalec }) => {
  const { i18n } = useTranslation();
  const [photos, setPhotos] = useState<string[]>([]);
  const [video, setVideo] = useState<string[]>([]);
  const [doc, setDoc] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState([0, 1, 2]);

  useEffect(() => {
    setLoading(true);
    if (generalec.idrubrique === 2) {
      setTab([0]);
    }
    const fetchAllData = async () => {
      const listImages: string[] = [];
      const listVideos: string[] = [];
      const photoByIdGen = await new GetPhotoByIdGenerale().execute(
        generalec.id!
      );
      if (photoByIdGen && photoByIdGen.length > 0) {
        for (let i = 0; i < photoByIdGen.length; i++) {
          listImages.push(
            `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${photoByIdGen[i].nomphoto}`
          );
        }
        setPhotos(listImages);
        setLoading(false);
      }
      const videoByIdGen = await new GetVideoByIdGenerale().execute(
        generalec.id!
      );
      if (videoByIdGen && videoByIdGen.length > 0) {
        for (let i = 0; i < videoByIdGen.length; i++) {
          listVideos.push(
            `${process.env.REACT_APP_BACKEND_URL}uploads/videos/${videoByIdGen[i].nomvideo}`
          );
        }
        setVideo(listVideos);
        setLoading(false);
      }
      const docByIdGen = await new GetDocumentByIdGenerale().execute(
        generalec.id!
      );
      if (docByIdGen && docByIdGen.length > 0) {
        setDoc(
          `${process.env.REACT_APP_BACKEND_URL}uploads/documents/${docByIdGen[0].nomdocument}`
        );
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
    {/* Single photos */}
      {photos && generalec.idrubrique === 2  ? (
        <div className="flex flex-row-reverse gap-12 justify-center p-2">
        <div className="w-1/2">
          <div className="">
            {generalec.titreen && i18n.language === "en" ? (
              <h1 className="font-bold text-xl">
                {/* Titre :{" "} */}
                <span className="text-green">
                  {generalec?.titreen ? generalec?.titreen : ""}
                </span>
              </h1>
            ) : (
              <h1 className="font-bold text-xl">
                {/* Titre :{" "} */}
                <span className="text-green">
                  {generalec?.titre ? generalec?.titre : ""}
                </span>
              </h1>
            )}
            {generalec.contenuen && i18n.language === "en" ? (
              <div className="min-h-32 my-2 text-[16px]">
                <HTMLRenderer
                  html={generalec?.contenuen ? generalec?.contenuen : ""}
                />
              </div>
            ) : (
              <div className="min-h-32 my-2 text-[16px]">
                <HTMLRenderer
                  html={generalec?.contenu ? generalec?.contenu : ""}
                />
              </div>
            )}
          </div>
          <div className="flex justify-end mr-8">
            {/* <p className="font-bold text-xl">Le : </p>{" "} */}
            <span>{`${
              generalec?.datecreation
                ? formatDateOnly(generalec?.datecreation)
                : ""
            }`}</span>
          </div>
        </div>
        {loading ? (
          <Loading isLoading={loading} />
        ) : (
          <div className="">
            <div className="flex w-full justify-center flex-wrap gap-3 m-2">
              {[0].map((index) => {
                if (photos[index]) {
                  return (
                    <div className="w-[500px] h-[500px]" key={index}>
                      <img
                        src={photos[index]}
                        alt=""
                        className="cursor-pointer h-full w-full object-cover"
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}
        {video.length > 0 && (
          <div className="">
            {/* <p className="font-bold text-xl">Vidéos : </p>{" "} */}
            <MyVideoGallery videos={video} />
          </div>
        )}
        {doc && (
          <a className="cursor-pointer" href={`${doc}`} download={`${doc}`}>
            <ButtonImage src="/assets/buttons/btn_download.svg" />
          </a>
        )}
      </div>
      ) : 
      // Multiple photos
      (
        <div className="flex flex-col-reverse gap-4 justify-center p-2">
        <div className="w-full">
          <div className="">
            {generalec.titreen && i18n.language === "en" ? (
              <h1 className="font-bold text-xl">
                {/* Titre :{" "} */}
                <span className="text-green">
                  {generalec?.titreen ? generalec?.titreen : ""}
                </span>
              </h1>
            ) : (
              <h1 className="font-bold text-xl">
                {/* Titre :{" "} */}
                <span className="text-green">
                  {generalec?.titre ? generalec?.titre : ""}
                </span>
              </h1>
            )}
            {generalec.contenuen && i18n.language === "en" ? (
              <div className="min-h-32 my-2 text-[16px]">
                <HTMLRenderer
                  html={generalec?.contenuen ? generalec?.contenuen : ""}
                />
              </div>
            ) : (
              <div className="min-h-32 my-2 text-[16px]">
                <HTMLRenderer
                  html={generalec?.contenu ? generalec?.contenu : ""}
                />
              </div>
            )}
          </div>
          <div className="flex justify-end mr-8">
            {/* <p className="font-bold text-xl">Le : </p>{" "} */}
            <span>{`${
              generalec?.datecreation
                ? formatDateOnly(generalec?.datecreation)
                : ""
            }`}</span>
          </div>
        </div>
        {loading ? (
          <Loading isLoading={loading} />
        ) : (
            <div className="flex lg:justify-center w-full flex-wrap gap-3 m-2">
              {[0,1,2].map((index) => {
                if (photos[index]) {
                  return (
                    <div className="w-[420px] h-[420px]" key={index}>
                      <img
                        src={photos[index]}
                        alt=""
                        className="cursor-pointer h-full w-full object-cover"
                      />
                    </div>
                  );
                }
              })}
            </div>
        )}
        {video.length > 0 && (
          <div className="">
            {/* <p className="font-bold text-xl">Vidéos : </p>{" "} */}
            <MyVideoGallery videos={video} />
          </div>
        )}
        {doc && (
          <a className="cursor-pointer" href={`${doc}`} download={`${doc}`}>
            <ButtonImage src="/assets/buttons/btn_download.svg" />
          </a>
        )}
      </div>
      )}
    </>
  );
};

export default DetailRectangle;
