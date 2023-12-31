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
    <div className="relative">
      {/* <div className="absolute inset-0 opacity-20"></div> */}
      <div className="relative flex ">
        <div className="w-full mx-4">
          <div className="flex flex-wrap justify-center gap-4 text-xl py-4  uppercase text-black  ">
            <div className="w-[200px] h-[100px] flex items-center text-center">
              <Navigation
                id={"15"}
                name="ConsultantIndi"
                activeTab={activeTabl}
                onClick={() => handleTabClick("15")}
              />
            </div>
            <div className="w-[200px] h-[100px] flex items-center text-center">
              <Navigation
                id={"29"}
                name="ConsultantCab"
                activeTab={activeTabl}
                onClick={() => handleTabClick("29")}
              />
            </div>
            <div
              className="flex items-center justify-center w-[200px] h-[100px]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px" }}
            >
              <Navigation
                id={"16"}
                name="Fournitures"
                activeTab={activeTabl}
                onClick={() => handleTabClick("16")}
              />
            </div>
            <div className="w-[200px] h-[100px] flex items-center text-center  ">
              <Navigation
                id={"17"}
                name="Services"
                activeTab={activeTabl}
                onClick={() => handleTabClick("17")}
              />
            </div>
            <div
              className="flex items-center justify-center w-[200px] h-[100px]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px" }}
            >
              <Navigation
                id={"18"}
                name="Travaux"
                activeTab={activeTabl}
                onClick={() => handleTabClick("18")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <TabContentSetting activeTab={activeTabl} />
      </div>
    </div>
  );
};

export default NavTabSetting;
