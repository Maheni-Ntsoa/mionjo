import { useTranslation } from "react-i18next";
import OneAproche from "../../../aPropos/components/OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const RealCompo5 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-center">{t("titrecompo5")}</h1>
        <div className="flex justify-center items-center">
          <p className="text-justify text-lg lg:text-xl w-full px-2 lg:px-8">
            {t("soustitrecompo5")}
          </p>
        </div>
        <div className="mb-4 mt-8 flex justify-center">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-4 lg:w-[850px]">
              <OneAproche
                composanteNumber={t("titreSousCompo5A")}
                image="/assets/souscompo/5A.jpg"
                lien="/activites/#composante"
                resume={t("textSousCompo5A")}
              />
              <OneAproche
                composanteNumber={t("titreSousCompo5B")}
                image="/assets/souscompo/5B.jpg"
                lien="/activites/#composante"
                resume={t("textSousCompo5B")}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-4 lg:w-[850px]">
              <OneAproche
                composanteNumber={t("titreSousCompo5C")}
                image="/assets/souscompo/5A.jpg"
                lien="/activites/#composante"
                resume={t("textSousCompo5C")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo5;
