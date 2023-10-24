import React from "react";

interface TextBanniereProps {
  texte: string;
  chiffre: string;
  image?: string;
  width?: number;
  height?: number;
  className?: string;
}

const TextBanniere: React.FC<TextBanniereProps> = ({
  texte,
  chiffre,
  image,
  width,
  height,
  className,
}) => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="flex w-32 h-32">
        <img src={image} alt="imgs" className="w-full h-full object-cover" />
      </div>
      <div
        className={`flex justify-center text-[0.5rem] md:text-[1rem] xl:text-[4rem] font-bold`}
      >
        {chiffre}
      </div>
      <div
        className={`${
          className ? className : ""
        } flex justify-center text-[0.5rem] md:text-[0.8rem] xl:text-[1.2rem] font-semibold`}
      >
        {texte}
      </div>
    </div>
  );
};

export default TextBanniere;
