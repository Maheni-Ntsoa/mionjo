import { useTranslation } from "react-i18next";
import TextBanniere from "./TextBanniere";

const Banniere = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full xl:h-[400px] w-full flex flex-col lg:flex-row items-center justify-between p-2 lg:p-12 uppercase bg-grey xl:bg-opacity-0">
      <div className="flex justify-center">
        <TextBanniere
          chiffre="5"
          image="/assets/composante/5compo.png"
          texte={t("compo")}
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="3"
          image="/assets/composante/region.svg"
          texte={t("regi")}
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="15"
          image="/assets/composante/district-01.png"
          texte={t("distric")}
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="235"
          image="/assets/composante/commune-01.png"
          texte={t("commu")}
          width={200}
          height={350}
        />
      </div>
      <div className="flex justify-center">
        <TextBanniere
          chiffre="7"
          image="/assets/composante/ministere-01.png"
          texte={t("mini")}
          width={200}
          height={350}
        />
      </div>
    </div>
  );
};

export default Banniere;
