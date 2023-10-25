import { useTranslation } from "react-i18next";
import OneCompo from "./OneCompo";

const Compos = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-wrap lg:flex-row xl:flex-nowrap justify-center gap-2 lg:gap-8">
        <OneCompo
          composanteNumber={t("compo1")}
          image="/assets/images/composante1.jpeg"
          lien={`/activites?tabId=${0}#composante`}
          resume={t("textcompo1")}
        />
        <OneCompo
          composanteNumber={t("compo2")}
          image="/assets/images/composante2.png"
          lien={`/activites?tabId=${1}#composante`}
          resume={t("textcompo2")}
        />
        <OneCompo
          composanteNumber={t("compo3")}
          image="/assets/images/composante3.jpeg"
          lien={`/activites?tabId=${2}#composante`}
          resume={t("textcompo3")}
        />
        <OneCompo
          composanteNumber={t("compo4")}
          image="/assets/images/composante4.png"
          lien={`/activites?tabId=${3}#composante`}
          resume={t("textcompo4")}
        />
        <OneCompo
          composanteNumber={t("compo5")}
          image="/assets/images/composante5.jpeg"
          lien={`/activites?tabId=${4}#composante`}
          resume={t("textcompo5")}
        />
      </div>
    </div>
  );
};

export default Compos;
