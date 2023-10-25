import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import AnnoncesA from "../AnnoncesA";

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
        {activeTab === "15" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={15} />
          </div>
        )}
        {activeTab === "29" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={29} />
          </div>
        )}
        {activeTab === "16" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={16} />
          </div>
        )}
        {activeTab === "17" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={17} />
          </div>
        )}
        {activeTab === "18" && (
          <div className="pt-8">
            <AnnoncesA idCategorie={4} idRubrique={18} />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
