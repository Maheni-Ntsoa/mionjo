import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../../../../components/Loading";
import Rectangle from "../../../../components/Rectangle";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";

const Events = () => {
  const [actus, setActus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    const fetchActus = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 1,
        idrubrique: 2,
      });

      if (data) {
        setActus(data);
        setLoading(false);
      }
    };
    fetchActus();
  }, [pageNumber]);

  const pageCount = Math.ceil(actus.length / itemsPerPage);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };

  return (
    <div className="flex flex-col bg-grey w-screen py-14">
      <div className="flex justify-end items-center mx-8">
        {/* <div> */}
        {/* <img
            src="/assets/icons/ic_actualite.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          /> */}
        {/* </div> */}
        <div className="xl:w-full border-blue border-b-4"></div>
        <div className="mr-8">
          <div className="rounded-full w-4 h-4 border-blue border-4"></div>
        </div>
        <div>
          <SubTitle title="Evénements" className="text-blue Uppercase" />
        </div>
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="mt-4 flex justify-center">
          <div className="flex flex-col xl:flex-row gap-10">
            {actus
              .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
              .map((actu, index) => (
                <Rectangle key={index} generalec={actu} />
              ))}
          </div>
        </div>
      )}
      {actus.length > 4 && (
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

export default Events;
