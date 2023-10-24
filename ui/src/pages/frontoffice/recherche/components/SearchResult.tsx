import MoodBadIcon from "@mui/icons-material/MoodBad";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import SearchBar from "../../../../components/SearchBar";
import SubTitle from "../../../../components/SubTitle";
import Generalec from "../../../../models/Generalec";
import OneResult from "./OneResult";

interface SearchResultProps {
  result: Generalec[];
  keyword?: string;
}
const SearchResult: React.FC<SearchResultProps> = ({ result, keyword }) => {
  const { t } = useTranslation();
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6;
  let pageCount = 10;
  if (result) {
    pageCount = Math.ceil(result.length / itemsPerPage);
  }

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center w-full">
        <div className="pt-14 lg:pt-0">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-center">
        <SubTitle title="SearchResult" className="my-2" />
      </div>
      <div className="flex justify-center mb-2">
        <div className="flex justify-between gap-8">
          {keyword && (
            <span className="text-md font-bold text-black/40">
              {t("Keyword")} : {keyword ? keyword : ""}
            </span>
          )}
          <span className="text-md font-bold text-black/40">
            {t("CountResult")} : {result?.length ? result?.length : 0}{" "}
          </span>
        </div>
      </div>
      <div className="w-screen px-4 flex justify-center">
        {result?.length ? (
          <div className="flex flex-col gap-6">
            {result
              .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((gen, index) => (
                <div key={index}>
                  <OneResult result={gen} />
                </div>
              ))}
            {result.length > itemsPerPage && (
              <div className="mt-4">
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  previousLabel={"Précédent"}
                  nextLabel={"Suivant"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={4}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              </div>
            )}
          </div>
        ) : (
          <p className="flex items-center text-2xl my-12">
            {" "}
            <MoodBadIcon /> Aucun résultat n'a été trouvé.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
