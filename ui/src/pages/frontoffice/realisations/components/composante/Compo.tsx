import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MyImageGallery from "../../../../../components/MyImageGallery";
import Generalec from "../../../../../models/Generalec";
import Photo from "../../../../../models/Photo";

interface CompoProps {
  generalec: Generalec;
  images: Photo[];
}

const Compo: React.FC<CompoProps> = ({ generalec, images }) => {
  const { i18n } = useTranslation();
  const [photos, setPhotos] = useState<string[]>([]);

  const HTMLRenderer = ({ html }: any) => {
    return (
      <div
        className="h-full w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const listImages: string[] = [];
      if (images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          listImages.push(
            `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${images[i].nomphoto}`
          );
        }
        setPhotos(listImages);
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col">
          {generalec.titreen && i18n.language === "en" ? (
            <h3 className="text-xl text-green font-bold ml-4 mb-2">
              {generalec.titreen}
            </h3>
          ) : (
            <h3 className="text-xl text-green font-bold ml-4 mb-2">
              {generalec.titre}
            </h3>
          )}
          {generalec.contenuen && i18n.language === "en" ? (
            <HTMLRenderer
              html={generalec?.contenuen ? generalec?.contenuen : ""}
            />
          ) : (
            <HTMLRenderer html={generalec?.contenu ? generalec?.contenu : ""} />
          )}
        </div>
      </div>
      {images.length > 0 && (
        <div className="mt-4 flex justify-center">
          <MyImageGallery images={photos} />
        </div>
      )}
    </>
  );
};

export default Compo;
