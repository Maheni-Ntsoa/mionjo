import { motion } from "framer-motion";
import { useState } from "react";
import SubTitle from "../../../../components/SubTitle";
import RealCompo1 from "./composante/RealCompo1";
import RealCompo2 from "./composante/RealCompo2";

const RealiParCompo = () => {
  const [selected, setSelected] = useState(2);
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/images/composante3.jpeg"
  );

  const handleSelect = (index: number, imageSrc: string) => {
    setSelected(index);
    setBackgroundImage(imageSrc);
  };

  const divs = [
    { imageSrc: "/assets/images/composante1.jpeg" },
    { imageSrc: "/assets/images/composante2.png" },
    { imageSrc: "/assets/images/composante3.jpeg" },
    { imageSrc: "/assets/images/composante4.jpg" },
    { imageSrc: "/assets/images/composante5.jpg" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <SubTitle title="ReaParCompo" />
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
                Soutien au moyen de subsistances resilients 1
              </h1>
            )}
            {selected === 1 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                Soutien au moyen de subsistances resilients 2
              </h1>
            )}
            {selected === 2 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                Soutien au moyen de subsistances resilients 3
              </h1>
            )}
            {selected === 3 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                Soutien au moyen de subsistances resilients 4
              </h1>
            )}
            {selected === 4 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                Soutien au moyen de subsistances resilients 5
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
                  <div className="w-[270px] h-[500px]">
                    <img
                      src={div.imageSrc}
                      alt=""
                      className="w-full h-full object-cover"
                    />
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
        {selected === 2 && <RealCompo1 />}
        {selected === 3 && <RealCompo1 />}
        {selected === 4 && <RealCompo1 />}
      </div>
    </div>
  );
};

export default RealiParCompo;
