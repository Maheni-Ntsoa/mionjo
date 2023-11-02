import { useEffect, useState } from "react";
import ButtonImage from "../../../components/ButtonImage";
import MyVideoGallery from "../../../components/MyVideoGallery";
import Generalec from "../../../models/Generalec";
import GetDocumentByIdGenerale from "../../../usecases/Document/GetDocumentByIdGenerale";
import GetPhotoByIdGenerale from "../../../usecases/Photo/GetPhotoByIdGenerale";
import GetVideoByIdGenerale from "../../../usecases/Video/GetVideoByIdGenerale";
import { formatDateOnly } from "../../../utils/formatDate";

interface DetailRectangleAdminProps {
  generalec: Generalec;
}

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const DetailRectangleAdmin: React.FC<DetailRectangleAdminProps> = ({
  generalec,
}) => {
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
    <div className="flex flex-col gap-8 justify-between p-2">
      {generalec.idcategorie === 4 && (
        <>
          <div className="flex gap-4">
            <h1>
              Titulaire du marché :{" "}
              <strong>
                {generalec?.titulairemarche ? generalec?.titulairemarche : ""}
              </strong>
            </h1>
            <h1>
              Montant du marché :{" "}
              <strong>
                {generalec?.montantmarche ? generalec?.montantmarche : ""}
              </strong>
            </h1>
          </div>
          <div className="flex">
            <h1>
              Etat annonce :{" "}
              {generalec.etatannonce === 0 ? "En cours" : "Attribué"}
            </h1>
          </div>
        </>
      )}
      <div className="flex justify-between gap-2 w-full">
        <div className="flex w-1/3">
          <div>
            <h1 className="font-bold text-xl">
              Titre en français :{" "}
              <span className="text-green">
                {generalec?.titre ? generalec?.titre : ""}
              </span>
            </h1>
            <div className="min-h-32 my-2 text-[16px]">
              <p className="font-bold text-xl">Contenu en français : </p>
              <HTMLRenderer
                html={generalec?.contenu ? generalec?.contenu : ""}
              />
            </div>
          </div>
        </div>
        <div className="flex w-1/3">
          <div>
            <h1 className="font-bold text-xl">
              Titre en anglais:{" "}
              <span className="text-green">
                {generalec?.titreen ? generalec?.titreen : ""}
              </span>
            </h1>
            <div className="min-h-32 my-2 text-[16px]">
              <p className="font-bold text-xl">Contenu en anglais : </p>
              <HTMLRenderer
                html={generalec?.contenuen ? generalec?.contenuen : ""}
              />
            </div>
          </div>
        </div>
        <div className="flex w-1/3">
          <div>
            <h1 className="font-bold text-xl">
              Titre en Malagasy:{" "}
              <span className="text-green">
                {generalec?.titremg ? generalec?.titremg : ""}
              </span>
            </h1>
            <div className="min-h-32 my-2 text-[16px]">
              <p className="font-bold text-xl">Contenu en Malagasy : </p>
              <HTMLRenderer
                html={generalec?.contenumg ? generalec?.contenumg : ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <p className="font-bold text-xl">Date : </p>{" "}
        <span>{`${
          generalec?.datecreation ? formatDateOnly(generalec?.datecreation) : ""
        }`}</span>
      </div>
      {loading ? (
        <div className="">
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
          <p className="font-bold text-xl">
            {tab.length === 0 ? "Photos" : ""}
          </p>{" "}
          {/* <MyImageGallery images={photos} /> */}
          <div className="flex lg:justify-center justify-center lg:w-full flex-wrap gap-3 m-2">
            {tab.map((index) => {
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
          <p className="font-bold text-xl">Vidéos : </p>{" "}
          <MyVideoGallery videos={video} />
        </div>
      )}
      {doc && (
        <a className="cursor-pointer" href={`${doc}`} download={`${doc}`}>
          <ButtonImage src="/assets/buttons/btn_download.svg" />
        </a>
      )}
    </div>
  );
};

export default DetailRectangleAdmin;
