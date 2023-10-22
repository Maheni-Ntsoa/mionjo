import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ListeConsultant from "../consultant/ListeConsultant";
import ConsultantCabinet from "../consultantcabinet/ConsultantCabinet";
import ListeFourniture from "../fourniture/ListeFourniture";
import ListeService from "../service/ListeService";
import ListeTravaux from "../travaux/ListeTravaux";

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
              <ListeConsultant />
            </div>
          </div>
        )}
        {activeTab === "5" && (
          <div className="pt-8">
            <div className=" ">
              <ConsultantCabinet />
            </div>
          </div>
        )}
        {activeTab === "2" && (
          <div className="pt-8">
            <ListeFourniture />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <ListeService />
          </div>
        )}
        {activeTab === "4" && (
          <div className="pt-8">
            <ListeTravaux />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
