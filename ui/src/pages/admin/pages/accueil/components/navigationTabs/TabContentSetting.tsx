import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ListeActualite from "../actualite/ListeActualite";
import ListeEvenement from "../evenement/ListeEvenement";
import ListeVideo from "../galerieVideo/ListeVideo";
import LISTI from "../interview/LIST";
import ListePhotoMois from "../photoMois/ListePhotoMois";
import ListePhotoVideo from "../photoVideo/ListePhotoVideo";

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
              <ListeActualite />
            </div>
          </div>
        )}
        {activeTab === "2" && (
          <div className="pt-8">
            <ListeEvenement />
          </div>
        )}
        {activeTab === "3" && (
          <div className="pt-8">
            <ListePhotoVideo />
          </div>
        )}
        {activeTab === "6" && (
          <div className="pt-8">
            <ListeVideo />
          </div>
        )}
        {activeTab === "4" && (
          <div className="pt-8">
            <LISTI idCategorie={8} idRubrique={28} />
          </div>
        )}
        {activeTab === "5" && (
          <div className="pt-8">
            <ListePhotoMois />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TabContentSetting;
