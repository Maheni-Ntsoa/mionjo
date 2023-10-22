import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Compo1 from "../Compo1";

interface TabContentSettingProps {
  activeTab: string;
}

const TabContentSetting: React.FC<TabContentSettingProps> = ({ activeTab }) => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        className="absolute z-20 mt-4 w-full"
        key={activeTab}
        {...fadeIn}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "1" && (
          <div className="">
            <div className=" ">
              <Compo1 idCategorie={6} idRubrique={22} />
            </div>
          </div>
        )}
        {activeTab === "2" && (
          <div className="">
            <Compo1 idCategorie={6} idRubrique={23} />
          </div>
        )}
        {activeTab === "3" && (
          <div className="">
            <Compo1 idCategorie={6} idRubrique={24} />
          </div>
        )}
        {activeTab === "4" && (
          <div className="">
            <Compo1 idCategorie={6} idRubrique={25} />
          </div>
        )}
        {activeTab === "5" && (
          <div className="">
            <Compo1 idCategorie={6} idRubrique={26} />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
