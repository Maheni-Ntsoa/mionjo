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
          <div className="flex flex-wrap justify-center gap-4 text-2xl py-4  uppercase text-black  ">
            <div className="w-[260px] h-[100px] flex items-center text-center" style={{
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
            }}>
              <Navigation
                id={"1"}
                name="ConsultantIndi"
                activeTab={activeTabl}
                onClick={() => handleTabClick("1")}
              />
            </div>
            <div className="w-[260px] h-[100px] flex items-center text-center" style={{
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
            }}>
              <Navigation
                id={"5"}
                name="ConsultantCab"
                activeTab={activeTabl}
                onClick={() => handleTabClick("5")}
              />
            </div>
            <div className="flex items-center justify-center w-[260px] h-[100px]" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px" }}>
              <Navigation
                id={"2"}
                name="Fournitures"
                activeTab={activeTabl}
                onClick={() => handleTabClick("2")}
              />
            </div>
            <div className="w-[250px] h-[100px] flex items-center text-center  " style={{
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
            }}>
              <Navigation
                id={"3"}
                name="Services"
                activeTab={activeTabl}
                onClick={() => handleTabClick("3")}
              />
            </div>
            <div className="flex items-center justify-center w-[260px] h-[100px]" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px" }}>
              <Navigation
                id={"4"}
                name="Travaux"
                activeTab={activeTabl}
                onClick={() => handleTabClick("4")}
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
