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
            <Consultants />
          </div>
        )}
        {activeTab === "5" && (
          <div className="pt-8">
            <ConsultantCab />
          </div>
        )}
        {activeTab === "2" && (
          <div className="pt-8">
            <Fournitures />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <RealisationsA />
          </div>
        )}
        {activeTab === "4" && (
          <div className="pt-8">
            <AnnoncesA />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
