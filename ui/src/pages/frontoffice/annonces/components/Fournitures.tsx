import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import OneAnnonce from "./OneAnnonce";

const Fournitures = () => {
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 4,
        idrubrique: 16,
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
  const { t } = useTranslation();
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center h-44 ml-44">
        <div className="">
          {/* <SubTitle title="encour" className="text-blue Uppercase" /> */}
          <h1 className="w-max text-xl lg:text-4xl xl:text-[50px] uppercase my-16 text-blue font-semibold font-quicksand"> {t("encour")}</h1>
        </div>
        <div className="ml-8">
          <div className="rounded-full w-4 h-4 border-blue border-4"></div>
        </div>
        <div className="xl:w-full border-blue border-b-4"></div>
      </div>
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

export default Fournitures;
