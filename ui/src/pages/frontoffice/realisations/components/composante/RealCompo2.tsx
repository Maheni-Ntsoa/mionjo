import { useTranslation } from "react-i18next";
import OneAproche from "../../../aPropos/components/OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const RealCompo2 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-center">{t("titrecompo2")}</h1>
        <div className="flex justify-center items-center">
          <p className="text-justify text-xl  w-[800px]">{t("soustitrecompo2")}</p>
        </div>
        <div className="my-4 flex justify-center">
          <div className="flex flex-wrap xl:flex-row xl:flex-wrap lg:justify-center gap-10 lg:mx-4 lg:w-[1600px]">
            <OneAproche
              composanteNumber={t("titreSousCompo2A")}
              image="/assets/souscompo/2A.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo2A")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo2B")}
              image="/assets/souscompo/2B.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo2B")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo2C")}
              image="/assets/souscompo/3C.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo2C")}
            />
            {/* <OneAproche
              composanteNumber={t("soutitre4")}
              image="/assets/images/composante4.jpg"
              lien="/activites/#composante"
              resume={t("textaproche4")}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo2;
