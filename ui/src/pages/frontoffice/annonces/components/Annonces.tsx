import { useLocation } from "react-router-dom";
import NavTabSetting from "./navigationTabs/NavTabSetting";

const Annonces = () => {
  const search = useLocation().search;
  const tabId = new URLSearchParams(search).get("tabId");
  return (
    <div>
      <div className="">
        <NavTabSetting activeTab={tabId?.toString()! || "15"} />
      </div>
    </div>
  );
};

export default Annonces;
