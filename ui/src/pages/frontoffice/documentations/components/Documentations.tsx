import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetDocumentByIdGenerale from "../../../../usecases/Document/GetDocumentByIdGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import OneDoc1 from "./OneDoc1";

const Documentations = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(
    "/assets/images/composante1.jpeg"
  );
  const [generales, setGenerales] = useState<any[]>([]);
  const [generales0, setGenerales0] = useState<any[]>([]);
  const [generales1, setGenerales1] = useState<any[]>([]);
  const [generales2, setGenerales2] = useState<any[]>([]);
  const [generales3, setGenerales3] = useState<any[]>([]);
  const [generales4, setGenerales4] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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
        if (generalesWithDocs) {
          let gen0: any[] = [];
          let gen1: any[] = [];
          let gen2: any[] = [];
          let gen3: any[] = [];
          let gen4: any[] = [];
          generalesWithDocs.forEach((gen) => {
            if (gen.contenu === "0") {
              gen0.push(gen);
            }
            if (gen.contenu === "1") {
              gen1.push(gen);
            }
            if (gen.contenu === "2") {
              gen2.push(gen);
            }
            if (gen.contenu === "3") {
              gen3.push(gen);
            }
            if (gen.contenu === "4") {
              gen4.push(gen);
            }
          });
          setGenerales0(gen0);
          setGenerales1(gen1);
          setGenerales2(gen2);
          setGenerales3(gen3);
          setGenerales4(gen4);
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

  const handleSelect = (index: number, imageSrc: string) => {
    setSelected(index);
    setBackgroundImage(imageSrc);
  };

  const divs = [
    { imageSrc: "/assets/images/composante1.jpeg", compo: "compo1" },
    { imageSrc: "/assets/images/composante2.png", compo: "compo2" },
    { imageSrc: "/assets/images/composante3.jpeg", compo: "compo3" },
    { imageSrc: "/assets/images/composante4.png", compo: "compo4" },
    { imageSrc: "/assets/images/composante5.jpeg", compo: "compo5" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <SubTitle title="documentation" />
        </div>
      </div>
      <div className="w-full h-full relative lg:mb-[20rem]">
        <div className="relative">
          <img
            src={backgroundImage}
            alt=""
            className="lg:min-w-[1280px] w-full h-[850px] object-cover hidden lg:block"
          />
          <div className="hidden lg:block absolute w-full px-8 top-1/4 z-10">
            {selected === 0 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo1")}
              </h1>
            )}
            {selected === 1 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo2")}
              </h1>
            )}
            {selected === 2 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo3")}
              </h1>
            )}
            {selected === 3 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo4")}
              </h1>
            )}
            {selected === 4 && (
              <h1 className="font-bold text-[40px] text-white text-center">
                {t("textcompo5")}
              </h1>
            )}
          </div>
          <div className="flex justify-center my-4 lg:my-0 lg:absolute w-full bottom-0 z-10">
            <div className="flex flex-col lg:flex-row justify-center gap-2 xl:-bottom-[150px] relative z-20">
              {divs.map((div, index) => (
                <motion.div
                  className={`flex cursor-pointer ${
                    selected === index ? "z-50" : "z-10"
                  }`}
                  initial={{
                    scale: selected === index ? 1.1 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  animate={{
                    scale: selected === index ? 1.1 : 1,
                    zIndex: selected === index ? 99 : 10,
                  }}
                  whileHover={{ scale: 1.1, zIndex: 99 }}
                  onClick={() => handleSelect(index, div.imageSrc)}
                  key={index}
                >
                  <div className="lg:w-[210px] lg:h-[450px] w-[250px] h-[210px] relative">
                    <img
                      src={div.imageSrc}
                      alt=""
                      className="w-full h-full object-cover"
                      style={{
                        filter: "blur(2px)",
                      }}
                    />
                    <p className="absolute top-1/3 lg:top-1/2 left-10 lg:left-7 text-center font-bold text-white text-2xl z-10">
                      {t(div.compo)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-center">
        <div>
          {selected === 0 && (
            <div className="flex flex-col lg:flex-row justify-center w-full gap-6">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {generales0
                      .slice(
                        pageNumber * itemsPerPage,
                        (pageNumber + 1) * itemsPerPage
                      )
                      .map((generale, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full h-[220px] gap-2">
                            <OneDoc1
                              title={generale.titre}
                              document={generale.doc}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {generales0.length > 4 && (
                    <div className="mt-4">
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
              )}
            </div>
          )}
          {selected === 1 && (
            <div className="flex flex-col lg:flex-row justify-center w-full gap-6">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {generales1
                      .slice(
                        pageNumber * itemsPerPage,
                        (pageNumber + 1) * itemsPerPage
                      )
                      .map((generale, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full h-[220px] gap-2">
                            <OneDoc1
                              title={generale.titre}
                              document={generale.doc}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {generales1.length > 4 && (
                    <div className="mt-4">
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
              )}
            </div>
          )}
          {selected === 2 && (
            <div className="flex flex-col lg:flex-row justify-center w-full gap-6">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {generales2
                      .slice(
                        pageNumber * itemsPerPage,
                        (pageNumber + 1) * itemsPerPage
                      )
                      .map((generale, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full h-[220px] gap-2">
                            <OneDoc1
                              title={generale.titre}
                              document={generale.doc}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {generales2.length > 4 && (
                    <div className="mt-4">
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
              )}
            </div>
          )}
          {selected === 3 && (
            <div className="flex flex-col lg:flex-row justify-center w-full gap-6">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {generales3
                      .slice(
                        pageNumber * itemsPerPage,
                        (pageNumber + 1) * itemsPerPage
                      )
                      .map((generale, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full h-[220px] gap-2">
                            <OneDoc1
                              title={generale.titre}
                              document={generale.doc}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {generales3.length > 4 && (
                    <div className="mt-4">
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
              )}
            </div>
          )}
          {selected === 4 && (
            <div className="flex flex-col lg:flex-row justify-center w-full gap-6">
              {loading ? (
                <Loading isLoading={loading} />
              ) : (
                <div>
                  <div className="flex flex-wrap justify-center gap-4">
                    {generales4
                      .slice(
                        pageNumber * itemsPerPage,
                        (pageNumber + 1) * itemsPerPage
                      )
                      .map((generale, index) => (
                        <div key={index}>
                          <div className="flex justify-center w-full h-[220px] gap-2">
                            <OneDoc1
                              title={generale.titre}
                              document={generale.doc}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                  {generales4.length > 4 && (
                    <div className="mt-4">
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documentations;
