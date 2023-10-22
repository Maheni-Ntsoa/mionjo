import { HashLink as Link } from "react-router-hash-link";
import ButtonImage from "../../../../components/ButtonImage";

interface OneCompoProps {
  lien: string;
  resume: string;
  image: string;
  composanteNumber: string;
}

const HTMLRenderer = ({ html }: any) => {
  return (
    <div
      className="h-full w-full flex items-center"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const OneCompo: React.FC<OneCompoProps> = ({
  lien,
  resume,
  image,
  composanteNumber,
}) => {
  return (
    <Link to={lien} className="flex flex-col gap-1 border border-white rounded w-[250px] lg:w-[250px] h-[400px] lg:h-[500px]" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px" }}>
      <div className="w-[250px] h-[210px]">
        <img
          src={`${image}`}
          alt="rectangle"
          className="cursor-pointer h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-center font-semibold text-lg">
        <h1>{composanteNumber}</h1>
      </div>
      <div className="text-sm lg:text-lg flex justify-center w-full lg:w-[250px] px-8">
        <p>{resume ? resume : ""}</p>
      </div>
      <div className="flex justify-center mt-auto">
        <div className="flex flex-col items-end">
          <ButtonImage
            src="Btnsavoirplus"
          ></ButtonImage>
        </div>
      </div>
    </Link>
  );
};

export default OneCompo;
