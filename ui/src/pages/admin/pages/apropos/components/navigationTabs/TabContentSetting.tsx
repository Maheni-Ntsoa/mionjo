import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ListeComposates from "../composantes/ListeComposates";
import ListeContexteSud from "../contexteSud/ListeContexteSud";
import ListeDescription from "../description/ListeDescription";
import ListeObjectif from "../objectif/ListeObjectif";
import ListeZoneIntervation from "../zoneIntervantion/ListeZoneIntervation";

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
            <div className=" ">
              <ListeDescription />
            </div>
          </div>
        )}
        {activeTab === "2" && (
          <div className="pt-8">
            <ListeObjectif />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <ListeComposates />
          </div>
        )}
        {activeTab === "4" && (
          <div className="pt-8">
            <ListeZoneIntervation />
          </div>
        )}
        {activeTab === "5" && (
          <div className="pt-8">
            <ListeContexteSud />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
