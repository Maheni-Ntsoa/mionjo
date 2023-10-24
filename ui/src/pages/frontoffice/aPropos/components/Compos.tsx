import { useTranslation } from "react-i18next";
import OneCompo from "./OneCompo";

const Compos = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-wrap xl:flex-row xl:flex-nowrap justify-center gap-8 mx-8">
        <OneCompo
          composanteNumber={t("compo1")}
          image="/assets/images/composante1.jpeg"
          lien="/activites/#composante"
          resume={t("textcompo1")}
        />
        <OneCompo
          composanteNumber={t("compo2")}
          image="/assets/images/composante2.png"
          lien="/activites/#composante"
          resume={t("textcompo2")}
        />
        <OneCompo
          composanteNumber={t("compo3")}
          image="/assets/images/composante3.jpeg"
          lien="/activites/#composante"
          resume={t("textcompo3")}
        />
        <OneCompo
          composanteNumber={t("compo4")}
          image="/assets/images/composante4.png"
          lien="/activites/#composante"
          resume={t("textcompo4")}
        />
        <OneCompo
          composanteNumber={t("compo5")}
          image="/assets/images/composante5.jpeg"
          lien="/activites/#composante"
          resume={t("textcompo5")}
        />
      </div>
    </div>
  );
};

export default Compos;
