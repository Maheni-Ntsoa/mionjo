interface NavigationProps {
  id: string;
  name: string;
  sousName?: string;
  activeTab: string;
  className?: string;
  onClick: () => void;
}

const Navigation = ({
  id,
  name,
  sousName,
  activeTab,
  onClick,
  className,
}: NavigationProps) => {
  return (
    <div
      className={`cursor-pointer py-2 ${activeTab === id && className ? className : ""}`}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <p className="text-center">{name ? name : ""}</p>
        <p className="text-center text-sm">{sousName ? sousName : ""}</p>
      </div>
    </div>
  );
};

export default Navigation;
