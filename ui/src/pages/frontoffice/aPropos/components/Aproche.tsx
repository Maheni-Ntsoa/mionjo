import { useTranslation } from "react-i18next";
import OneAproche from "./OneAproche";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam `;
const Aproche = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-wrap xl:flex-row xl:flex-wrap lg:justify-center gap-10 lg:mx-4 lg:w-[1600px]">
        <OneAproche
          composanteNumber={t("soutitre1")}
          image="/assets/images/APPROCHES/001.jpg"
          lien="/activites/#composante"
          resume={t("textaproche1")}
        />
        <OneAproche
          composanteNumber={t("soutitre2")}
          image="/assets/images/APPROCHES/0002.jpg"
          lien="/activites/#composante"
          resume={t("textaproche2")}
        />
        <OneAproche
          composanteNumber={t("soutitre3")}
          image="/assets/images/APPROCHES/003.jpg"
          lien="/activites/#composante"
          resume={t("textaproche3")}
        />
        <OneAproche
          composanteNumber={t("soutitre4")}
          image="/assets/images/005.jpg"
          lien="/activites/#composante"
          resume={t("textaproche4")}
        />
      </div>
    </div>
  );
};

export default Aproche;
