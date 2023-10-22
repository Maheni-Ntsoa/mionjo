import React from "react";

interface TextBanniereProps {
  texte: string;
  chiffre: string;
  image?: string;
  width?: number;
  height?: number;
  className?: string
}

const TextBanniere: React.FC<TextBanniereProps> = ({
  texte,
  chiffre,
  image,
  width,
  height,
  className
}) => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="lg:flex justify-center hidden">
        <img src={image} alt="facebook" width={width} height={height} />
      </div>
      <div className="lg:hidden justify-center">
        <img src={image} alt="facebook" width={80} height={80} />
      </div>
      <div
        className={`flex justify-center text-[1rem] md:text-[2rem] xl:text-[5rem] font-bold`}
      >
        {chiffre}
      </div>
      {/* <div className="flex justify-center border-b-2 border-white w-1/2"></div> */}
      <div className={`${className ? className : ""}flex justify-center text-[0.5rem] md:text-[0.8rem] xl:text-[1.5rem] font-semibold`}>
        {texte}
      </div>
    </div>
  );
};

export default TextBanniere;
