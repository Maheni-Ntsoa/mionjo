import { useState } from "react";
import Navigation from "./Navigation";
import TabContentSetting from "./TabContentSetting";

interface NavTabSettingProps {
  activeTab: string;
}

const NavTabSetting: React.FC<NavTabSettingProps> = ({ activeTab }) => {
  const [activeTabl, setActiveTabl] = useState(activeTab);

  const handleTabClick = (tabNumber: any) => {
    setActiveTabl(tabNumber);
  };

  return (
    <div className="relative mt-12">
      <div className="absolute inset-0 opacity-20"></div>
      <div className="relative flex">
        <div className="w-full mx-4">
          <div className="flex flex-wrap gap-4 text-md uppercase text-brown font-semibold">
            <Navigation
              id={"1"}
              name="Consultant individuel"
              activeTab={activeTabl}
              onClick={() => handleTabClick("1")}
            />
            <Navigation
              id={"5"}
              name="Consultant cabinet"
              activeTab={activeTabl}
              onClick={() => handleTabClick("5")}
            />
            <Navigation
              id={"2"}
              name="Fournitures"
              activeTab={activeTabl}
              onClick={() => handleTabClick("2")}
            />
            <Navigation
              id={"3"}
              name="Non consultant de services"
              activeTab={activeTabl}
              onClick={() => handleTabClick("3")}
            />
            <Navigation
              id={"4"}
              name="Travaux"
              activeTab={activeTabl}
              onClick={() => handleTabClick("4")}
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
