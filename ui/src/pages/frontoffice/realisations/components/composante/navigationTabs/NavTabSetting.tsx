import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./Navigation";
import TabContentSetting from "./TabContentSetting";

interface NavTabSettingProps {
  activeTab: string;
}

const NavTabSetting: React.FC<NavTabSettingProps> = ({ activeTab }) => {
  const { t } = useTranslation()
  const [activeTabl, setActiveTabl] = useState(activeTab);

  const handleTabClick = (tabNumber: any) => {
    setActiveTabl(tabNumber);
  };

  return (
    <div className="relative ">
      <div className="absolute inset-0 opacity-20"></div>
      <div className="relative flex">
        <div className="w-full mx-4">
          <div className="flex flex-wrap gap-4 text-md text-black/50 uppercase font-semibold">
            <Navigation
              id={"1"}
              name={t("compo1")}
              className="  bg-black/50 p-2 rounded-md text-white"
              sousName={t("reaCompo1")}
              activeTab={activeTabl}
              onClick={() => handleTabClick("1")}
            />
            <Navigation
              id={"2"}
              name={t("compo2")}
              className=" bg-black/50 p-2 rounded-md text-white"
              sousName={t("reaCompo2")}
              activeTab={activeTabl}
              onClick={() => handleTabClick("2")}
            />
            <Navigation
              id={"3"}
              className=" bg-black/50 p-2 rounded-md text-white"
              name={t("compo3")}
              sousName={t("reaCompo3")}
              activeTab={activeTabl}
              onClick={() => handleTabClick("3")}
            />
            <Navigation
              id={"4"}
              name={t("compo4")}
              className=" bg-black/50 p-2 rounded-md text-white"
              sousName={t("reaCompo4")}
              activeTab={activeTabl}
              onClick={() => handleTabClick("4")}
            />
            <Navigation
              id={"5"}
              name={t("compo5")}
              className="bg-black/50 p-2 rounded-md text-white"
              sousName={t("reaCompo5")}
              activeTab={activeTabl}
              onClick={() => handleTabClick("5")}
            />
          </div>
          <div className="mt-2 border-b border-brown opacity-30 w-full"></div>
        </div>
      </div>
      <div className="">
        <TabContentSetting activeTab={activeTabl} />
      </div>
    </div>
  );
};

export default NavTabSetting;
