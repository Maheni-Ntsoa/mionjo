import { useTranslation } from "react-i18next";
import TextBanniere from "./TextBanniere";

const Banniere = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full lg:h-[400px] w-full flex flex-col md:flex-row items-center justify-between p-2 lg:p-12 uppercase" style={{ backgroundColor: "transparent" }}>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="5"
          image="/assets/composante/5compo.png"
          texte={t("compo")}
          width={250}
          height={250}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="3"
          image="/assets/composante/region.svg"
          texte={t("regi")}
          width={250}
          height={250}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="15"
          image="/assets/composante/district-01.png"
          texte={t("distric")}
          width={250}
          height={250}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="235"
          image="/assets/composante/commune-01.png"
          texte={t("commu")}
          width={350}
          height={350}
          className="pt-24"
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="7"
          image="/assets/composante/ministere-01.png"
          texte={t("mini")}
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default Banniere;
