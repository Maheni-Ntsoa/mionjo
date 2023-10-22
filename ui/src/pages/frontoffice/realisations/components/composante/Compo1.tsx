import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../../../../../components/Loading";
import GetGeneralecByIdCateAndIdRubri from "../../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetPhotoByIdGenerale from "../../../../../usecases/Photo/GetPhotoByIdGenerale";
import Compo from "./Compo";

interface Compo1Props {
  idCategorie: number;
  idRubrique: number;
}

const Compo1: React.FC<Compo1Props> = ({ idCategorie, idRubrique }) => {
  const [loading, setLoading] = useState(true);
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: idCategorie,
        idrubrique: idRubrique,
      });

      if (data) {
        const promises = data.map(async (generale) => {
          const img = await new GetPhotoByIdGenerale().execute(generale.id!);
          if (img) {
            return {
              ...generale,
              images: img.length > 0 ? img : [],
            };
          }
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
    <>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex flex-col gap-2">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <Compo generalec={generale} images={generale.images} />
              </div>
            ))}
        </div>
      )}
      {generales.length > 1 && (
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
    </>
  );
};

export default Compo1;
