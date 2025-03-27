import { useLocation } from "react-router-dom";
import SearchResult from "./components/SearchResult";

const Recherche = () => {
  const location = useLocation();
  const { result, keyword } = location.state || {};

  return (
    <div className="min-h-screen font-proximaNova">
      <div className="flex justify-center my-12" id="reallocal">
        <SearchResult result={result!} keyword={keyword!} />
      </div>
    </div>
  );
};

export default Recherche;
