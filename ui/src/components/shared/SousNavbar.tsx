import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Generalec from "../../models/Generalec";
import GetInterview from "../../usecases/Generalec/GetInterview";
import GetPhotoByIdGenerale from "../../usecases/Photo/GetPhotoByIdGenerale";
import GetPhotoMois from "../../usecases/PhotoMois/GetPhotoMois";
import ButtonImage from "../ButtonImage";
import DetailRectangleInterview from "../DetailRectangleInterview";
import Loading from "../Loading";
import MyModal from "../MyModal";
import ShowPhoto from "../ShowPhoto";

const SousNavbar = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [openPhoto, setOpenPhoto] = useState(false);
  const [openInterview, setOpenInterview] = useState(false);
  const [photoMois, setPhotoMois] = useState("");
  const [resumePhotoMois, setResumePhotoMois] = useState("");
  const [interview, setInterview] = useState<Generalec>();
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    const getInterview = async () => {
      const interview = await new GetInterview().execute();
      if (interview) {
        const listImages: string[] = [];
        const photoByIdGen = await new GetPhotoByIdGenerale().execute(
          interview[0].id!
        );
        if (photoByIdGen && photoByIdGen.length >= 0) {
          for (let i = 0; i < photoByIdGen.length; i++) {
            listImages.push(
              `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${photoByIdGen[i].nomphoto}`
            );
          }
          setPhotos(listImages);
          setLoading(false);
        }
        setInterview(interview[0]);
        setLoading(false);
      }
    };
    getInterview();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getPhotoMois = async () => {
      const photom = await new GetPhotoMois().execute();
      if (photom) {
        setPhotoMois(photom[0].nomphoto);
        setResumePhotoMois(photom[0].resume!);
        setLoading(false);
      }
    };
    getPhotoMois();
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleClosePhoto = () => {
    setOpenPhoto(false);
  };

  const handleCloseInterview = () => {
    setOpenInterview(false);
  };

  return (
    <nav className="w-full shadow-brown drop-shadow-lg top-0 z-10 max-h-24 mb-24 lg:mb-0 py-4 xl:py-0 h-fit relative">
      <div className="border-b-4 border-blue flex items-center absolute top-1/2 -z-10 w-full"></div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 items-center w-full py-2">
        <div
          className="col-start-2 ml-0 lg:ml-12 col-span-7 grid grid-cols-11 bg-white lg:h-16 h-fit items-center"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
          }}
        >
          <motion.div
            className="col-start-2 col-span-5 lg:ml-2 h-full lg:h-16 w-full bg-white flex justify-center relative px-2 cursor-pointer border-l-8 border-blue"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, zIndex: 99 }}
            onClick={() => setOpenInterview(true)}
          >
            <div className="text-blue text-xs lg:text-base font-extrabold font-quicksand absolute z-20 mr-2 lg:left-4 top-1 uppercase">
              <p>{t("interview")}</p>
            </div>
            {loading ? (
              <Loading isLoading={loading} />
            ) : (
              <div className="flex justify-start bg-white h-full w-full text-xs">
                <div className="lg:flex flex-col lg:gap-2">
                  <div className="text-blue text-xs font-light lg:px-2 pt-4 lg:pt-8">
                    {i18n.language === "en" && interview?.titreen ? (
                      <span>
                        {interview?.titreen
                          ? interview?.titreen.slice(0, 45) + "..."
                          : ""}
                      </span>
                    ) : (
                      <span>
                        {interview?.titre
                          ? interview?.titre.slice(0, 45) + "..."
                          : ""}
                      </span>
                    )}
                    {i18n.language === "mg" && interview?.titremg && (
                      <span>
                        {interview?.titremg
                          ? interview?.titremg.slice(0, 45) + "..."
                          : ""}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div
            className="col-start-7 col-span-5 h-16 w-full px-2 bg-white cursor-pointer relative border-l-8 border-blue"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2, zIndex: 99 }}
            onClick={() => setOpenPhoto(true)}
          >
            <div className="text-blue text-xs lg:text-base font-extrabold font-quicksand absolute z-20 mr-2 lg:left-4 top-1 uppercase">
              <p>{t("photomois")}</p>
            </div>
            {loading ? (
              <Loading isLoading={loading} />
            ) : (
              <div className="flex justify-start bg-white h-full w-full text-xs lg:text-base">
                <div className="lg:flex flex-col lg:gap-2">
                  <div className="text-blue text-xs font-light lg:px-2 pt-4 lg:pt-8">
                    <span>
                      {resumePhotoMois
                        ? resumePhotoMois.slice(0, 45) + "..."
                        : ""}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
        <div className="col-start-10 col-span-2 mr-12">
          <motion.div className="flex flex-col justify-center items-center">
            <ButtonImage
              width="w-[15rem]"
              src="BtnDocument"
              onClick={() => navigate("/documentations")}
            />
          </motion.div>
        </div>
        <div className="col-start-12 col-span-1">
          <div className="flex justify-end gap-2 font-bold pr-4 mb-12 text-blue">
            <button
              onClick={() => changeLanguage("fr")}
              className={`text-xs text-end ${i18n.language === "fr" ? "text-black/20" : ""
                }`}
            >
              FR
            </button>{" "}
            |{" "}
            <button
              className={`text-xs text-end ${i18n.language === "en" ? "text-black/20" : ""
                }`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            |{" "}
            <button
              className={`text-xs text-end ${i18n.language === "mg" ? "text-black/20" : ""
                }`}
              onClick={() => changeLanguage("mg")}
            >
              MG
            </button>
          </div>
        </div>
      </div>
      <MyModal open={openPhoto} onClose={handleClosePhoto}>
        <ShowPhoto
          image={`${process.env.REACT_APP_BACKEND_URL}uploads/photos/${photoMois}`}
        />
      </MyModal>
      <MyModal open={openInterview} onClose={handleCloseInterview}>
        <DetailRectangleInterview generalec={interview!} />
      </MyModal>
    </nav>
  );
};

export default SousNavbar;
