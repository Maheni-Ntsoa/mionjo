import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import AnnoncesA from "../AnnoncesA";
import ConsultantCab from "../ConsultantCab";
import Consultants from "../Consultants";
import Fournitures from "../Fournitures";
import RealisationsA from "../RealisationsA";

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
        className="flex justify-start z-20 mt-4"
        key={activeTab}
        {...fadeIn}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "1" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={15} />
          </div>
        )}
        {activeTab === "5" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={29} />
          </div>
        )}
        {activeTab === "2" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={16} />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={17} />
          </div>
        )}
        {activeTab === "4" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={18} />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
