import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { default as ListeDeposerPlainte } from "../deposerPlaintes/ListeDeposerPlainte";
import ListeStatiGestionPlainte from "../statistiqueGestionPlainte/ListeStatiGestionPlainte";
import ListeIdee from "../../../../../frontoffice/ideeEtPlaintes/components/ListeIdee";

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
        {activeTab === "2" && (
          <div className="pt-8">
            <ListeIdee />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <ListeStatiGestionPlainte />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
