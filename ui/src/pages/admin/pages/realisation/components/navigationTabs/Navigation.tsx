interface NavigationProps {
  id: string;
  name: string;
  activeTab: string;
  onClick: () => void;
}

const Navigation = ({ id, name, activeTab, onClick }: NavigationProps) => {
  return (
    <div
      className={`cursor-pointer py-2 ${activeTab === id ? "bg-brown p-2 rounded-md text-white" : ""
        }`}
      onClick={onClick}
    >
      {name ? name : ""}
    </div>
  );
};

export default Navigation;
