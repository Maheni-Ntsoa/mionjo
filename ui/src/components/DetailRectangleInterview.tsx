import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Generalec from "../models/Generalec";
import GetPhotoByIdGenerale from "../usecases/Photo/GetPhotoByIdGenerale";
import { formatDate, formatDateOnly } from "../utils/formatDate";

interface DetailRectangleInterviewProps {
  generalec: Generalec;
}

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const DetailRectangleInterview: React.FC<DetailRectangleInterviewProps> = ({
  generalec,
}) => {
  const { i18n } = useTranslation();
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAllData = async () => {
      const listImages: string[] = [];
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
    };
    fetchAllData();
  }, []);

  return (
    <div className="flex flex-row-reverse gap-14 justify-center p-2">
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
        <div className="w-1/2">
          {photos.length > 0 && (
            <>
              <p className="font-bold text-xl">Photos : </p>{" "}
              {/* <MyImageGallery images={photos} /> */}
              <div className="flex lg:justify-center justify-center lg:w-full flex-wrap gap-3 m-2">
                {[1, 2, 3].map((index) => {
                  return (
                    <div
                      className="w-[500px] h-[500px] bg-black/20"
                      key={index}
                    ></div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="">
          {/* <p className="font-bold text-xl">
            {tab.length === 0 ? "Photos" : ""}
          </p>{" "} */}
          {/* <MyImageGallery images={photos} /> */}
          <div className="flex lg:justify-center justify-center lg:w-full flex-wrap gap-3 m-2">
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
    </div>
  );
};

export default DetailRectangleInterview;
