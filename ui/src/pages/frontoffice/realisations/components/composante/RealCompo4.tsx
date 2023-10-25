import { useTranslation } from "react-i18next";
import OneAproche from "../../../aPropos/components/OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const RealCompo4 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-center">{t("titrecompo4")}</h1>
        <div className="flex justify-center items-center">
          <p className="text-justify text-lg lg:text-xl w-full px-2 lg:px-8">
            {t("soustitrecompo4")}
          </p>
        </div>
        <div className="mb-4 mt-8 flex justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-4 lg:w-[850px]">
              <OneAproche
                composanteNumber={t("titreSousCompo4A")}
                image="/assets/souscompo/4A.png"
                lien="/activites/#composante"
                resume={t("textSousCompo4A")}
              />
              <OneAproche
                composanteNumber={t("titreSousCompo4B")}
                image="/assets/souscompo/4B.png"
                lien="/activites/#composante"
                resume={t("textSousCompo4B")}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-4 lg:w-[850px]">
              <OneAproche
                composanteNumber={t("titreSousCompo4C")}
                image="/assets/souscompo/4C.png"
                lien="/activites/#composante"
                resume={t("textSousCompo4C")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo4;
