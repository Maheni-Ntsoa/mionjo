import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Generalec from "../models/Generalec";
import GetPhotoByIdGenerale from "../usecases/Photo/GetPhotoByIdGenerale";
import { formatDateOnly } from "../utils/formatDate";
import DetailRectangle from "./DetailRectangle";
import Loading from "./Loading";
import MyModal from "./MyModal";

interface RectangleProps {
  generalec?: Generalec;
}

const Rectangle: React.FC<RectangleProps> = ({ generalec }) => {
  const { i18n } = useTranslation();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchAllData = async () => {
      const listImages: string[] = [];
      const photoByIdGen = await new GetPhotoByIdGenerale().execute(
        generalec?.id!
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

  const HTMLRenderer = ({ html }: any) => {
    return (
      <div
        className="h-full w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      height: "100%",
      opacity: 1,
      transition: { duration: 0.5 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({ height: "0%", opacity: 0, transition: { duration: 0.5 } });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center">
      {generalec?.idrubrique === 2 ? (
        // Evenement
        <motion.div
          className="w-[285px] h-[400px] z-10 relative overflow-hidden cursor-pointer rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            onClick={openModal}
            className="absolute z-20 w-full h-full bg-white flex items-center justify-center cursor-pointer"
            initial={{ height: "0%", opacity: 0 }}
            animate={controls}
          >
            <div className="z-10 relative w-full h-full flex flex-col justify-between p-4 rounded-xl">
              <div className=" w-full h-full flex flex-col justify-between p-4 bg-white rounded-xl">
                <div>
                  {generalec.titreen && i18n.language === "en" ? (
                    <h1 className="font-bold text-lg">
                      {/* Titre :{" "} */}
                      <span className="text-green">
                        {generalec?.titreen ? generalec?.titreen : ""}
                      </span>
                    </h1>
                  ) : (
                    <h1 className="font-bold text-lg">
                      {/* Titre :{" "} */}
                      <span className="text-green">
                        {generalec?.titre ? generalec?.titre : ""}
                      </span>
                    </h1>
                  )}
                  {generalec.titremg && i18n.language === "mg" && (
                    <h1 className="font-bold text-lg">
                      {/* Titre :{" "} */}
                      <span className="text-green">
                        {generalec?.titremg ? generalec?.titremg : ""}
                      </span>
                    </h1>
                  )}
                  <div className="text-justify min-h-32 my-2 text-[14px]">
                    {generalec.contenuen && i18n.language === "en" ? (
                      <HTMLRenderer
                        html={
                          generalec?.contenuen
                            ? generalec?.contenuen.slice(0, 120) + "..."
                            : ""
                        }
                      />
                    ) : (
                      <HTMLRenderer
                        html={
                          generalec?.contenu
                            ? generalec?.contenu.slice(0, 120) + "..."
                            : ""
                        }
                      />
                    )}
                    {generalec.contenumg && i18n.language === "mg" && (
                      <HTMLRenderer
                        html={
                          generalec?.contenumg
                            ? generalec?.contenumg.slice(0, 120) + "..."
                            : ""
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <span>{`${generalec?.datecreation
                      ? formatDateOnly(generalec?.datecreation)
                      : ""
                    }`}</span>
                </div>
              </div>
            </div>
            {/* <img src="/assets/icons/ic_plus.svg" alt="ic_plus" /> */}
          </motion.div>
          {/* Debut Texte */}
          {loading ? (
            <Loading isLoading={loading} />
          ) : (
            <div className="">
              <div className="">
                {[0].map((index) => {
                  if (photos[index]) {
                    return (
                      <div
                        className="w-[275px] h-[400px] rounded-xl"
                        key={index}
                      >
                        <img
                          src={photos[index]}
                          alt=""
                          className="cursor-pointer h-full w-full object-cover rounded-xl"
                          style={
                            {
                              // boxShadow: "rgba(0, 0, 0, 0.5) 9px 9px 12px -2px",
                              // borderRadius: "15%",
                            }
                          }
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
          {/* Fin Texte */}
        </motion.div>
      ) : (
        // Actus
        <motion.div
          className="w-[285px] h-[400px] z-10 gap-10 relative overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            onClick={openModal}
            className="absolute z-20 w-full h-full bg-white flex items-center justify-center cursor-pointer"
            initial={{ height: "0%", opacity: 0 }}
            animate={controls}
          >
            <div className="">
              {[0].map((index) => {
                if (photos[index]) {
                  return (
                    <div className="w-[285px] h-[400px]" key={index}>
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
          </motion.div>
          {/* Debut Texte */}
          <div className="z-10 relative  w-full h-full flex flex-col justify-between p-4">
            <div
              className="w-full h-full flex flex-col justify-between p-4 bg-white"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
              }}
            >
              <div>
                <h1 className="font-bold text-lg">
                  {/* Titre :{" "} */}
                  <span className="text-green">
                    {generalec?.titre ? generalec?.titre : ""}
                  </span>
                </h1>
                <div className="text-justify min-h-32 my-2 text-[14px]">
                  <HTMLRenderer
                    html={
                      generalec?.contenu
                        ? generalec?.contenu.slice(0, 120) + "..."
                        : ""
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                {/* <p className="font-bold text-lg">Date : </p>{" "} */}
                <span>{`${generalec?.datecreation
                    ? formatDateOnly(generalec?.datecreation)
                    : ""
                  }`}</span>
              </div>
            </div>
          </div>
          {/* Fin Texte */}
        </motion.div>
      )}
      <AnimatePresence>
        <MyModal onClose={closeModal} open={modalIsOpen}>
          <DetailRectangle generalec={generalec!} />
        </MyModal>
      </AnimatePresence>
    </div>
  );
};

export default Rectangle;
