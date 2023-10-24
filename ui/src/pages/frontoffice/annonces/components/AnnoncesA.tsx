import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import Loading from "../../../../components/Loading";
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import OneAnnonce from "./OneAnnonce";

interface AnnoncesAProps {
  idCategorie: number;
  idRubrique: number;
}

const AnnoncesA: React.FC<AnnoncesAProps> = ({ idCategorie, idRubrique }) => {
  const { i18n } = useTranslation();
  const [generales, setGenerales] = useState<any[]>([]);
  const [inProgress, setInProgress] = useState<any[]>([]);
  const [assigned, setAssigned] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: idCategorie,
        idrubrique: idRubrique,
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
        if (generalesWithDocs) {
          const docAssigneds = generalesWithDocs.filter(
            (doc) => doc.etatannonce === 10
          );
          if (docAssigneds) {
            setAssigned(docAssigneds);
          }
        }
        if (generalesWithDocs) {
          const docInProgress = generalesWithDocs.filter(
            (doc) => doc.etatannonce !== 10
          );
          if (docInProgress) {
            setInProgress(docInProgress);
          }
        }
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
  const { t } = useTranslation();

  return (
    <>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex flex-col gap-4">
          {/* en cours */}
          <div className="mt-4">
            <div className="flex justify-center lg:pl-20 items-center">
              <div className="">
                <h1 className="w-max text-xl lg:text-4xl xl:text-[50px] uppercase my-16 text-blue font-semibold font-quicksand">
                  {" "}
                  {t("encour")}
                </h1>
              </div>
              <div className="ml-8">
                <div className="rounded-full w-4 h-4 border-blue border-4"></div>
              </div>
              <div className="w-full border-blue border-b-4"></div>
            </div>
            <div className="mt-4 flex flex-col gap-4 justify-center">
              {inProgress
                .slice(
                  pageNumber * itemsPerPage,
                  (pageNumber + 1) * itemsPerPage
                )
                .map((generale, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <OneAnnonce document={generale.doc} generalec={generale} />
                  </div>
                ))}
            </div>
            {inProgress.length > 4 && (
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
          {/* Attribue */}
          <div className="mt-4">
            <div className="flex justify-center pl-20 items-center">
              <div className="">
                <h1 className="w-max text-xl lg:text-4xl xl:text-[50px] uppercase my-16 text-blue font-semibold font-quicksand">
                  {" "}
                  {t("Attribue")}
                </h1>
              </div>
              <div className="ml-8">
                <div className="rounded-full w-4 h-4 border-blue border-4"></div>
              </div>
              <div className="w-full border-blue border-b-4"></div>
            </div>
            <div className="mt-4 flex flex-col gap-4 justify-center">
              {assigned
                .slice(
                  pageNumber * itemsPerPage,
                  (pageNumber + 1) * itemsPerPage
                )
                .map((generale, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <OneAnnonce document={generale.doc} generalec={generale} />
                  </div>
                ))}
            </div>
            {assigned.length > 4 && (
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
        </div>
      )}
    </>
  );
};

export default AnnoncesA;
