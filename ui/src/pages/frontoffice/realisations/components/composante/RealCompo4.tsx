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
          <p className="text-justify text-xl  w-[800px]">{t("soustitrecompo4")}</p>
        </div>
        <div className="my-4 flex justify-center">
          <div className="flex flex-wrap xl:flex-row xl:flex-wrap lg:justify-center gap-10 lg:mx-4 lg:w-[1600px]">
            <OneAproche
              composanteNumber={t("titreSousCompo4A")}
              image="/assets/souscompo/4A.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo4A")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo4B")}
              image="/assets/souscompo/4B.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo4B")}
            />
            <OneAproche
              composanteNumber={t("titreSousCompo4C")}
              image="/assets/souscompo/4C.jpg"
              lien="/activites/#composante"
              resume={t("textSousCompo4C")}
            />
            {/* <OneAproche
              composanteNumber={t("titreSousCompo4D")}
              image="/assets/images/composante4.png"
              lien="/activites/#composante"
              resume={t("textSousCompo4D")}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo4;
