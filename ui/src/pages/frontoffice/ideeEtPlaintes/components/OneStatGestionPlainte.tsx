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
        {/* {generale.titreen && i18n.language === "en" ? (
          <h1 className="font-bold text-xl flex justify-center">
          
            <span className="text-green">
              {generale?.titreen ? generale?.titreen : ""}
            </span>
          </h1>
        ) : (
          <h1 className="font-bold text-xl flex justify-center">
          
            <span className="text-green">
              {generale?.titre ? generale?.titre : ""}
            </span>
          </h1>
        )}
        {generale.contenuen && i18n.language === "en" ? (
          <div className="mt-4 flex justify-center">
            <HTMLRenderer
              html={generale?.contenuen ? generale?.contenuen : ""}
            />
          </div>
        ) : (
          <div className="mt-4 flex justify-center">
            <HTMLRenderer html={generale?.contenu ? generale?.contenu : ""} />
          </div>
        )} */}
        <div className="mt-4 flex justify-center  rounded-xl border-4 xl: w-[500px] xl: h-[500px]">
          <img src={generale.img} alt="rectangle" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default OneStatGestionPlainte;
