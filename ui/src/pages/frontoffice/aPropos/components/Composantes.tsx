import { useTranslation } from "react-i18next";
import Compos from "./Compos";

const Composantes = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col mt-12">
      <div>
        <h1 className="text-[35px] font-bold text-center text-white uppercase mb-8">
          {t("compo")}
        </h1>
      </div>
      <Compos />
    </div>
  );
};

export default Composantes;
