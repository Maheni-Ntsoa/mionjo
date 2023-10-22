import { useLocation } from "react-router-dom";
import Generalec from "../../../models/Generalec";
import SearchResult from "./components/SearchResult";

const Recherche = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resultParam = queryParams.get("result");
  const keyword = queryParams.get("keyword");
  const result: Generalec[] = resultParam
    ? JSON.parse(decodeURIComponent(resultParam))
    : null;

  return (
    <div className="min-h-screen font-proximaNova">
      <div className="flex justify-center my-12" id="reallocal">
        <SearchResult result={result!} keyword={keyword!} />
      </div>
    </div>
  );
};

export default Recherche;
