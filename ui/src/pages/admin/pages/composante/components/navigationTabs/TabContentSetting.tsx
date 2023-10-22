import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ListeCompo1 from "../compo1/ListeCompo1";
import ListeCompo2 from "../compo2/ListeCompo2";
import ListeCompo3 from "../compo3/ListeCompo3";
import ListeCompo4 from "../compo4/ListeCompo4";
import ListeCompo5 from "../compo5/ListeCompo5";


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
              <ListeCompo1 />
            </div>
          </div>
        )}
        {activeTab === "2" && (
          <div className="pt-8">
            <ListeCompo2 />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <ListeCompo3 />
          </div>
        )}
        {activeTab === "4" && (
          <div className="pt-8">
            <ListeCompo4 />
          </div>
        )}
        {activeTab === "5" && (
          <div className="pt-8">
            <ListeCompo5 />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
