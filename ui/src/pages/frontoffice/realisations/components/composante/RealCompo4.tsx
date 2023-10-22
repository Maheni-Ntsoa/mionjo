import { useTranslation } from "react-i18next";
import OneAproche from "../../../aPropos/components/OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const RealCompo4 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl text-center">Titre 2</h1>
        <div className="flex justify-center">
          <p className="text-justify text-xl">
            Sous-titre ou un petit resume 2
          </p>
        </div>
        <div className="my-4 flex justify-center">
          <div className="flex flex-wrap xl:flex-row xl:flex-wrap lg:justify-center gap-10 lg:mx-4 lg:w-[1600px]">
            <OneAproche
              composanteNumber={t("soutitre1")}
              image="/assets/images/composante1.jpeg"
              lien="/activites/#composante"
              resume={t("textaproche1")}
            />
            <OneAproche
              composanteNumber={t("soutitre2")}
              image="/assets/images/composante2.png"
              lien="/activites/#composante"
              resume={t("textaproche2")}
            />
            <OneAproche
              composanteNumber={t("soutitre3")}
              image="/assets/images/composante3.jpeg"
              lien="/activites/#composante"
              resume={t("textaproche3")}
            />
            <OneAproche
              composanteNumber={t("soutitre4")}
              image="/assets/images/composante4.jpg"
              lien="/activites/#composante"
              resume={t("textaproche4")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealCompo4;
