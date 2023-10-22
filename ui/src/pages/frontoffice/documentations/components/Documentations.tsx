import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../../../../components/Loading";
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import OneDoc from "./OneDoc";

const Documentations = () => {
  const [loading, setLoading] = useState(true);
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 7,
        idrubrique: 27,
      });

      if (data) {
        const promises = data.map(async (generale) => {
          const doc = await new GetDocumentByIdGenerale().execute(generale.id!);
          return {
            ...generale,
            doc: doc && doc[0] ? doc[0].nomdocument : "erreur.txt",
          };
        });

        const generalesWithDocs = await Promise.all(promises);
        setGenerales(generalesWithDocs);
        setLoading(false);
      }
    };
    fetchGenerale();
  }, [pageNumber]);

  const pageCount = Math.ceil(generales.length / itemsPerPage);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };

  return (
    <div className="flex justify-center m-2">
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div>
          <div className="flex flex-col gap-4">
            {generales
              .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((generale, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <OneDoc
                    title={generale.titre}
                    longText={generale.contenu}
                    document={generale.doc}
                  />
                </div>
              ))}
          </div>
          {generales.length > 4 && (
            <div className="mt-4">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                previousLabel={"Précédent"}
                nextLabel={"Suivant"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Documentations;
