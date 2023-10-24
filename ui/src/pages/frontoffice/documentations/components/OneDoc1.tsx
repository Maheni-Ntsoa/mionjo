import React from "react";
import ButtonImage from "../../../../components/ButtonImage";

interface OneDoc1Props {
  title?: string;
  longText?: string;
  document?: string;
}

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const OneDoc1: React.FC<OneDoc1Props> = ({ title, longText, document }) => {
  return (
    <div
      className="flex flex-col border border-grey p-4 w-[250px] lg:w-[550px]"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
      }}
    >
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-md lg:text-xl font-bold ml-4 mb-2">{title}</h3>
          <p className="text-xs lg:text-md">{longText}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <a
          className="cursor-pointer"
          // href={`${process.env.REACT_APP_BACKEND_URL}uploads/documents/${document}`}
          href={`/assets/documents/${document}`}
          download={`${document}`}
        >
          <ButtonImage src="BtnDown" />
        </a>
      </div>
    </div>
  );
};

export default OneDoc1;
