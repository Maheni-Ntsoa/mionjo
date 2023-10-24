import { HashLink as Link } from "react-router-hash-link";
import ButtonImage from "../../../../components/ButtonImage";

interface OneCompoProps {
  lien: string;
  resume: string;
  image: string;
  composanteNumber: string;
}

const OneCompo: React.FC<OneCompoProps> = ({
  lien,
  resume,
  image,
  composanteNumber,
}) => {
  return (
    <div
      className="flex flex-col gap-1 w-[210px] h-[450px]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px" }}
    >
      <div className="w-full h-[210px]">
        <img
          src={`${image}`}
          alt="rectangle"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-center font-semibold text-lg">
        <h1>{composanteNumber}</h1>
      </div>
      <div className="text-sm lg:text-base text-center flex justify-center w-full px-2">
        <p>{resume ? resume : ""}</p>
      </div>
      <div className="flex justify-center mt-auto">
        <Link to={lien} className="flex flex-col items-end cursor-pointer">
          <ButtonImage src="Btnsavoirplus"></ButtonImage>
        </Link>
      </div>
    </div>
  );
};

export default OneCompo;
