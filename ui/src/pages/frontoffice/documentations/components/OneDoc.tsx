import React from "react";
import ButtonImage from "../../../../components/ButtonImage";

interface OneDocProps {
  title: string;
  longText: string;
  document: string;
}

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const OneDoc: React.FC<OneDocProps> = ({ title, longText, document }) => {
  return (
    <div className="border rounded-lg border-grey p-4">
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col">
          <h3 className="text-xl text-green font-bold ml-4 mb-2">{title}</h3>
          <HTMLRenderer html={longText ? longText : ""} />
        </div>
      </div>
      <div className="mt-4 flex justify-end mr-16">
        <a
          className="cursor-pointer"
          href={`${process.env.REACT_APP_BACKEND_URL}uploads/documents/${document}`}
          download={`${document}`}
        >
          <ButtonImage src="BtnDown" />
        </a>
      </div>
    </div>
  );
};

export default OneDoc;
