import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ListeRealisationLocalite from "../realisationLocalite/ListeRealisationLocalite";
import ListeSystemeInfo from "../systemeinformation/ListeSystemeInfo";


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
          <div className="pt-8">
            <ListeRealisationLocalite />
          </div>
        )}
        {/* {activeTab === "2" && (
          <div className="pt-8">
            <ListeComposante />
          </div>
        )} */}
        {activeTab === "2" && (
          <div className="pt-8">
            <ListeSystemeInfo />
          </div>
        )}
        {/* {activeTab === "4" && (
          <div className="pt-8">

          </div>
        )} */}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
