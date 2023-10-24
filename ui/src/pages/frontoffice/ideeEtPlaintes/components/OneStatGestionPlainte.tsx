import { useTranslation } from "react-i18next";

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

interface OneStatGestionPlainteProps {
  generale: any;
}

const OneStatGestionPlainte: React.FC<OneStatGestionPlainteProps> = ({
  generale,
}) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center  rounded-xl border-brown border-4  w-[300px] h-ful lg:w-[350px] lg: h-[350px]">
          <img src={generale.img} alt="rectangle" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default OneStatGestionPlainte;
