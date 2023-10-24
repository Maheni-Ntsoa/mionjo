import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SubTitle from "../../../../components/SubTitle";
import RealCompo1 from "./composante/RealCompo1";
import RealCompo2 from "./composante/RealCompo2";
import RealCompo3 from "./composante/RealCompo3";
import RealCompo4 from "./composante/RealCompo4";
import RealCompo5 from "./composante/RealCompo5";

const RealiParCompo = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/images/composante1.jpeg"
  );

  const handleSelect = (index: number, imageSrc: string) => {
    setSelected(index);
    setBackgroundImage(imageSrc);
  };

  const divs = [
    { imageSrc: "/assets/images/composante1.jpeg", compo: "compo1" },
    { imageSrc: "/assets/images/composante2.png", compo: "compo2" },
    { imageSrc: "/assets/images/composante3.jpeg", compo: "compo3" },
    { imageSrc: "/assets/images/composante4.png", compo: "compo4" },
    { imageSrc: "/assets/images/composante5.jpeg", compo: "compo5" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <SubTitle title="ReaParCompo" />
        </div>
      </div>
      <div className="w-full h-full relative lg:mb-[20rem]">
        <div className="relative">
          <img
            src={backgroundImage}
            alt=""
            className="lg:min-w-[1440px] w-full h-[850px] object-cover hidden lg:block"
          />
          <div className="hidden lg:block absolute w-full top-1/4 z-10">
            {selected === 0 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo1")}
              </h1>
            )}
            {selected === 1 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo2")}
              </h1>
            )}
            {selected === 2 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo3")}
              </h1>
            )}
            {selected === 3 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo4")}
              </h1>
            )}
            {selected === 4 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo5")}
              </h1>
            )}
          </div>
          <div className="flex justify-center my-4 lg:my-0 lg:absolute w-full bottom-0 z-10">
            <div className="flex flex-col lg:flex-row justify-center gap-2 xl:-bottom-[150px] relative z-20">
              {divs.map((div, index) => (
                <motion.div
                  className={`flex cursor-pointer ${
                    selected === index ? "z-50" : "z-10"
                  }`}
                  initial={{
                    scale: selected === index ? 1.1 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  animate={{
                    scale: selected === index ? 1.1 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  whileHover={{ scale: 1.1, zIndex: 99 }}
                  onClick={() => handleSelect(index, div.imageSrc)}
                  key={index}
                >
                  <div className="lg:w-[210px] lg:h-[450px] w-[250px] h-[210px] relative">
                    <img
                      src={div.imageSrc}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        filter: "blur(2px)",
                      }}
                    />
                    <p className="absolute top-1/3 lg:top-1/2 left-10 lg:left-7 text-center font-bold text-white text-2xl z-10">
                      {t(div.compo)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-center">
        {selected === 0 && <RealCompo1 />}
        {selected === 1 && <RealCompo2 />}
        {selected === 2 && <RealCompo3 />}
        {selected === 3 && <RealCompo4 />}
        {selected === 4 && <RealCompo5 />}
      </div>
    </div>
  );
};

export default RealiParCompo;
