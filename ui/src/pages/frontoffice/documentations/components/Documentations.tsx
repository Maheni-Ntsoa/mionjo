import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SubTitle from "../../../../components/SubTitle";
import OneDoc1 from "./OneDoc1";

const Documentations = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/images/composante3.jpeg"
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
          <SubTitle title="documentation" />
        </div>
      </div>
      <div className="w-full h-full relative mb-[20rem]">
        <div className="relative">
          <div className="w-screen xl:h-[850px]">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full top-1/4 z-10">
            {selected === 0 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo1")}
              </h1>
            )}
            {selected === 1 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo2")}
              </h1>
            )}
            {selected === 2 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo3")}
              </h1>
            )}
            {selected === 3 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo4")}
              </h1>
            )}
            {selected === 4 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo5")}
              </h1>
            )}
          </div>
          <div className="absolute w-full bottom-0 z-10">
            <div className="flex justify-center gap-2 max-width-screen xl:-bottom-[150px] relative z-20">
              {divs.map((div, index) => (
                <motion.div
                  className={`flex cursor-pointer ${
                    selected === index ? "z-50" : "z-10"
                  }`}
                  initial={{
                    scale: selected === index ? 1.2 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  animate={{
                    scale: selected === index ? 1.2 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  whileHover={{ scale: 1.2, zIndex: 99 }}
                  onClick={() => handleSelect(index, div.imageSrc)}
                  key={index}
                >
                  <div className="w-[270px] h-[500px] relative">
                    <img
                      src={div.imageSrc}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        filter: "blur(2px)",
                      }}
                    />
                    <p className="absolute top-1/2 left-12 text-center font-bold text-white text-2xl z-10">
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
        <div>
          {selected === 0 && (
            <div className="flex justify-center w-full gap-6">
              <div className="flex justify-center w-full gap-2">
                <OneDoc1
                  title={`Lalàna laharana faha 98-029
                mitondra Fehezan-dalàna
                momba ny Rano`}
                  document={`codedeleauversionmalagasy2.pdf`}
                />
              </div>
              <div className="flex justify-center w-full gap-2">
                <OneDoc1
                  title={`TOROLALANA FANDRAFETANA
                FEHEZAM-PITSIPIKA
                MIKASIKA NY FANADIOVANA SY NY FIDIOVANA`}
                  document={`codedeleauversionmalagasy.pdf`}
                />
              </div>
            </div>
          )}
          {selected === 1 && (
            <div className="flex justify-center w-full gap-6">
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`Lalàna laharana faha 98-029
                mitondra Fehezan-dalàna
                momba ny Rano`}
                document={`codedeleauversionmalagasy2.pdf`}
              /> */}
              </div>
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`TOROLALANA FANDRAFETANA
                FEHEZAM-PITSIPIKA
                MIKASIKA NY FANADIOVANA SY NY FIDIOVANA`}
                document={`codedeleauversionmalagasy.pdf`}
              /> */}
              </div>
            </div>
          )}
          {selected === 2 && (
            <div className="flex justify-center w-full gap-6">
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`Lalàna laharana faha 98-029
                mitondra Fehezan-dalàna
                momba ny Rano`}
                document={`codedeleauversionmalagasy2.pdf`}
              /> */}
              </div>
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`TOROLALANA FANDRAFETANA
                FEHEZAM-PITSIPIKA
                MIKASIKA NY FANADIOVANA SY NY FIDIOVANA`}
                document={`codedeleauversionmalagasy.pdf`}
              /> */}
              </div>
            </div>
          )}
          {selected === 3 && (
            <div className="flex justify-center w-full gap-6">
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`Lalàna laharana faha 98-029
                mitondra Fehezan-dalàna
                momba ny Rano`}
                document={`codedeleauversionmalagasy2.pdf`}
              /> */}
              </div>
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`TOROLALANA FANDRAFETANA
                FEHEZAM-PITSIPIKA
                MIKASIKA NY FANADIOVANA SY NY FIDIOVANA`}
                document={`codedeleauversionmalagasy.pdf`}
              /> */}
              </div>
            </div>
          )}
          {selected === 4 && (
            <div className="flex justify-center w-full gap-6">
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`Lalàna laharana faha 98-029
                mitondra Fehezan-dalàna
                momba ny Rano`}
                document={`codedeleauversionmalagasy2.pdf`}
              /> */}
              </div>
              <div className="flex justify-center w-full gap-2">
                {/* <OneDoc1
                title={`TOROLALANA FANDRAFETANA
                FEHEZAM-PITSIPIKA
                MIKASIKA NY FANADIOVANA SY NY FIDIOVANA`}
                document={`codedeleauversionmalagasy.pdf`}
              /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documentations;
