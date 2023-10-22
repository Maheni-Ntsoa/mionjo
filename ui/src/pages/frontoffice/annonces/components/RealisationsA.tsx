import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import OneAnnonce from "./OneAnnonce";

const RealisationA = () => {
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 4,
        idrubrique: 17,
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
      }
    };
    fetchGenerale();
  }, [pageNumber]);

  const pageCount = Math.ceil(generales.length / itemsPerPage);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };

  return (
    <div className="mt-4">
      <div className="mt-4 flex flex-col gap-4 justify-center">
        {generales
          .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
          .map((generale, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <OneAnnonce document={generale.doc} generalec={generale} />
            </div>
          ))}
      </div>
      {generales.length > 4 && (
        <div className="my-4">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            previousLabel={
              <img
                src="/assets/icons/ic_paginate-left.svg"
                alt="left"
                width={10}
                height={10}
              />
            }
            nextLabel={
              <img
                src="/assets/icons/ic_paginate-right.svg"
                alt="left"
                width={10}
                height={10}
              />
            }
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
  );
};

export default RealisationA;
