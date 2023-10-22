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
    <div
      className={`cursor-pointer py-4 ${activeTab === id ? "bg-blue p-2 w-[260px] h-[100px]  flex items-center text-2xl justify-center text-white" : "w-[260px] h-[100px] flex items-center justify-center"
        }`}
      onClick={onClick}
    >
      {name ? t(name) : ""}
    </div>
  );
};

export default Navigation;
