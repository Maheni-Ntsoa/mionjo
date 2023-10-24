import { useTranslation } from "react-i18next";
import OneAproche from "../../../aPropos/components/OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const RealCompo1 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-center">{t("titrecompo1")}</h1>
        <div className="flex justify-center items-center">
          <p className="text-justify text-lg lg:text-xl w-full px-2 lg:px-8">
            {t("soustitrecompo1")}
          </p>
        </div>
        <div className="mb-4 mt-8 flex justify-center">
          <div className="flex flex-col lg:flex-row justify-center gap-10 lg:mx-4 lg:w-[850px]">
            <OneAproche
              composanteNumber={t("soutitreCompo1A")}
              image="/assets/souscompo/1A.jpg"
              lien="/activites/#composante"
              resume={t("textaproche1")}
            />
            <OneAproche
              composanteNumber={t("soutitreCompo1B")}
              image="/assets/souscompo/1B.jpg"
              lien="/activites/#composante"
              resume={t("textaproche2")}
            />
            {/* <OneAproche
              composanteNumber={t("soutitreCompo3")}
              image="/assets/images/composante3.jpeg"
              lien="/activites/#composante"
              resume={t("textaproche3")}
            />
            <OneAproche
              composanteNumber={t("soutitreCompo1")}
              image="/assets/images/composante4.png"
              lien="/activites/#composante"
              resume={t("textaproche4")}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo1;
