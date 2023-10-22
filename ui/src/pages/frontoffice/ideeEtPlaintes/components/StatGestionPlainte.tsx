import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";
import OneStatGestionPlainte from "./OneStatGestionPlainte";

const StatGestionPlainte = () => {
  const [loading, setLoading] = useState(false);
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 5,
        idrubrique: 21,
      });

      if (data) {
        const promises = data.map(async (generale) => {
          const img = await new GetPhotoByIdGenerale().execute(generale.id!);
          return {
            ...generale,
            img:
              img && img[0]
                ? `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${img[0].nomphoto}`
                : "/assets/images/img_rectangle.png",
          };
        });

        const generalesWithImages = await Promise.all(promises);
        setGenerales(generalesWithImages);
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-4">
        <div className="mt-2">
          <img
            src="/assets/icons/ic_stat.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <SubTitle title="StatPlaintes" />
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="my-4 flex flex-col xl:flex-row flex-wrap justify-center gap-4 w-2/3">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <OneStatGestionPlainte generale={generale} />
              </div>
            ))}
        </div>

      )}
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
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <img src="/assets/images/img_singleAloalo.svg" alt="singleAloalo" />
      </div>
    </div>
  );
};

export default StatGestionPlainte;
