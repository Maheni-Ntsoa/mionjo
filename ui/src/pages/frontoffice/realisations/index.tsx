import { useLocation } from "react-router-dom";
import RealiParCompo from "./components/RealiParCompo";

const Realisations = () => {
  const search = useLocation().search;
  const tabId = new URLSearchParams(search).get("tabId");
  return (
    <div className="font-proximaNova mx-2 lg:mx-8">
      <div className="flex justify-center my-12" id="composante">
        <RealiParCompo tabId={+tabId!} />
      </div>
      {/* <div className="flex justify-center my-12" id="localite">
        <RealLocalite />
      </div> */}

      {/* <div className="flex justify-center my-12" id="sise">
        <SystEtSuiviEval />
      </div> */}
    </div>
  );
};

export default Realisations;
