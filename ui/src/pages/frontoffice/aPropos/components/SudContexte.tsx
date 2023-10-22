import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";
import OneSudContexte from "./OneSudContexte";

const SudContexte = () => {
  const [loading, setLoading] = useState(true);
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 1;

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 2,
        idrubrique: 10,
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
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-4">
        <div className="mt-2">
          <img
            src="/assets/icons/ic_contexteSud.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <SubTitle title="Contexte du sud" />
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="mt-4 flex flex-col gap-4">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <OneSudContexte
                  title={generale.titre}
                  socioText={generale.contenu}
                  image={generale.img}
                />
              </div>
            ))}
        </div>
      )}
      {/* <div className="mt-4">
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
      </div> */}
      <div className="mt-4 flex justify-center">
        <img src="/assets/images/img_singleAloalo.svg" alt="singleAloalo" />
      </div>
    </div>
  );
};

export default SudContexte;
