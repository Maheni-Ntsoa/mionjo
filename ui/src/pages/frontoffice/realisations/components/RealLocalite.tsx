import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";
import OneRealLocal from "./OneRealLocal";

// const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu, maximus ligula. In posuere, lacus eu pulvinar cursus, erat ante vulputate erat, a volutpat dui urna laoreet metus. Curabitur egestas justo at nibh imperdiet malesuada. Sed vestibulum sem eget orci maximus semper. Phasellus tellus tellus, porta sit amet lectus efficitur, egestas sodales risus. Curabitur iaculis convallis interdum. Quisque cursus posuere sapien rutrum venenatis. Phasellus et est et magna semper placerat. Nulla vel neque vel sem fermentum fermentum vel nec nulla. Donec pretium metus augue, vel interdum nisl iaculis at.`;
// const images = [
//   "/assets/images/nestjs.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
//   "/assets/images/sequelize.png",
// ];

const RealLocalite = () => {
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 1;

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 3,
        idrubrique: 12,
      });

      if (data) {
        const promises = data.map(async (generale) => {
          const img = await new GetPhotoByIdGenerale().execute(generale.id!);
          if (img) {
            return {
              ...generale,
              images:
                img.length > 0 ? img : ["/assets/images/img_rectangle.png"],
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
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <img
            src="/assets/icons/ic_realilocalite.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="ReaParLoc" />
        </div>
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex flex-col gap-2">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <OneRealLocal generalec={generale} images={generale.images} />
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

export default RealLocalite;
