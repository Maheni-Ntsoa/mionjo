import React from "react";
import { useTranslation } from "react-i18next";

interface SubTitleProps {
  title: string;
  className?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({
  title,
  className,
}: SubTitleProps) => {
  const { t } = useTranslation();

  return (
    <div className={`w-max font-quicksand ${className ? className : "my-12"}`}>
      <h1 className="text-xl lg:text-4xl xl:text-[50px] font-bold uppercase my-16">
        {t(title)}
      </h1>
    </div>
  );
};

export default SubTitle;
