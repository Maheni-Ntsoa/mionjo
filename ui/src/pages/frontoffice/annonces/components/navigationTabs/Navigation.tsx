import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  id: string;
  name: string;
  activeTab: string;
  onClick: () => void;
}

const Navigation = ({ id, name, activeTab, onClick }: NavigationProps) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={`cursor-pointer py-4 ${
        activeTab === id
          ? "bg-blue p-2 w-[200px] h-[100px]  flex items-center text-xl justify-center text-white"
          : "w-[200px] h-[100px] flex items-center justify-center"
      }`}
      animate={{
        scale: activeTab === id ? 1.2 : 1,
        zIndex: activeTab === id ? 19 : 10,
      }}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
      }}
      onClick={onClick}
    >
      {name ? t(name) : ""}
    </motion.div>
  );
};

export default Navigation;
