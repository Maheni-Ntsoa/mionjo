import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import SubTitle from "../../../../components/SubTitle";
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import OneDoc1 from "./OneDoc1";

const Documentations = () => {
  const [loading, setLoading] = useState(true);
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  const { t } = useTranslation();
  const [selected, setSelected] = useState(2);
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/images/composante3.jpeg"
  );

  const handleSelect = (index: number, imageSrc: string) => {
    setSelected(index);
    setBackgroundImage(imageSrc);
  };

  const divs = [
    { imageSrc: "/assets/images/composante1.jpeg" },
    { imageSrc: "/assets/images/composante2.png" },
    { imageSrc: "/assets/images/composante3.jpeg" },
    { imageSrc: "/assets/images/composante4.png" },
    { imageSrc: "/assets/images/composante5.jpeg" },
  ];

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
    // <div className="flex justify-center m-2">
    //   {loading ? (
    //     <Loading isLoading={loading} />
    //   ) : (
    //     <div>
    //       <div className="flex flex-col gap-4">
    //         {generales
    //           .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
    //           .map((generale, index) => (
    //             <div className="flex flex-col gap-2" key={index}>
    //               <OneDoc
    //                 title={generale.titre}
    //                 longText={generale.contenu}
    //                 document={generale.doc}
    //               />
    //             </div>
    //           ))}
    //       </div>
    //       {generales.length > 4 && (
    //         <div className="mt-4">
    //           <ReactPaginate
    //             pageCount={pageCount}
    //             onPageChange={handlePageClick}
    //             previousLabel={"Précédent"}
    //             nextLabel={"Suivant"}
    //             breakLabel={"..."}
    //             breakClassName={"break-me"}
    //             marginPagesDisplayed={2}
    //             pageRangeDisplayed={5}
    //             containerClassName={"pagination"}
    //             activeClassName={"active"}
    //           />
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <SubTitle title="documentation" />
        </div>
      </div>
      <div className="w-full h-full relative mb-[20rem]">
        <div className="relative">
          <div className="w-screen xl:h-[850px]">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-full top-1/4 z-10">
            {selected === 0 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo1")}
              </h1>
            )}
            {selected === 1 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo2")}
              </h1>
            )}
            {selected === 2 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo3")}
              </h1>
            )}
            {selected === 3 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo4")}
              </h1>
            )}
            {selected === 4 && (
              <h1 className="font-bold text-[50px] text-white text-center">
                {t("textcompo5")}
              </h1>
            )}
          </div>
          <div className="absolute w-full bottom-0 z-10">
            <div className="flex justify-center gap-2 max-width-screen xl:-bottom-[150px] relative z-20">
              {divs.map((div, index) => (
                <motion.div
                  className={`flex cursor-pointer ${
                    selected === index ? "z-50" : "z-10"
                  }`}
                  initial={{
                    scale: selected === index ? 1.2 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  animate={{
                    scale: selected === index ? 1.2 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  whileHover={{ scale: 1.2, zIndex: 99 }}
                  onClick={() => handleSelect(index, div.imageSrc)}
                  key={index}
                >
                  <div className="w-[270px] h-[500px]">
                    <img
                      src={div.imageSrc}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-center">
        <div>
          <div className="flex justify-center w-full gap-6">
            {generales
              .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((generale, index) => (
                <div className="flex justify-center w-full gap-2" key={index}>
                  <OneDoc1
                    title={generale.titre}
                    longText={generale.contenu}
                    document={generale.doc}
                  />
                </div>
              ))}
          </div>
          {generales.length > itemsPerPage && (
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
                pageRangeDisplayed={4}
                containerClassName={"pagination"}
                activeClassName={"active"}
              />
            </div>
          )}
        </div>
        {/* {selected === 0 && <OneDoc1 />} */}
        {/* {selected === 1 && <OneDoc1 />}
        {selected === 2 && <OneDoc1 />}
        {selected === 3 && <OneDoc1 />}
        {selected === 4 && <OneDoc1 />} */}
      </div>
    </div>
  );
};

export default Documentations;
