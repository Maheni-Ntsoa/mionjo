import { useTranslation } from "react-i18next";
import OneAproche from "../../../aPropos/components/OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const RealCompo3 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-center">{t("titrecompo3")}</h1>
        <div className="flex justify-center items-center">
          <p className="text-justify text-xl  w-[800px]">{t("soustitrecompo3")}</p>
        </div>
        <div className="my-4 flex justify-center">
          <div className="flex flex-wrap xl:flex-row xl:flex-wrap lg:justify-center gap-10 lg:mx-4 lg:w-[1600px]">
            <OneAproche
              composanteNumber={t("titreSousCompo3A")}
              image="/assets/souscompo/3A.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo3A")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo3B")}
              image="/assets/souscompo/3B.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo3B")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo3C")}
              image="/assets/souscompo/4C.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo3C")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo3D")}
              image="/assets/souscompo/3D.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo3D")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo3;
