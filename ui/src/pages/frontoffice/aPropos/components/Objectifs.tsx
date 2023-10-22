import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu, maximus ligula. In posuere, lacus eu pulvinar cursus, erat ante vulputate erat, a volutpat dui urna laoreet metus. Curabitur egestas justo at nibh imperdiet malesuada. Sed vestibulum sem eget orci maximus semper. Phasellus tellus tellus, porta sit amet lectus efficitur, egestas sodales risus. Curabitur iaculis convallis interdum. Quisque cursus posuere sapien rutrum venenatis. Phasellus et est et magna semper placerat. Nulla vel neque vel sem fermentum fermentum vel nec nulla. Donec pretium metus augue, vel interdum nisl iaculis at.
Praesent dictum ante et magna fermentum, ac pellentesque mi vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed porta risus eu eleifend porttitor. Sed ultricies, tellus eu posuere condimentum, nisi augue tincidunt libero, eget ornare risus elit a nunc. Sed purus dui, convallis id leo at, porttitor varius felis. In orci massa, semper non lectus nec, tristique commodo metus. Etiam velit leo, euismod ut ipsum sed, vehicula ultricies sapien. Proin posuere nulla ac eros laoreet convallis.`;

const Objectifs = () => {
  const { i18n } = useTranslation();
  const [generales, setGenerales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 1;

  const HTMLRenderer = ({ html }: any) => {
    return (
      <div
        className="h-full w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 2,
        idrubrique: 7,
      });
      if (data) {
        setGenerales(data);
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
    <div className="flex flex-col text-white">
      <div className="flex justify-center items-center gap-4 pt-8">
        <div className="">
          <img
            src="/assets/icons/ic_objet.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="Objectifs" className="text-white" />
        </div>
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : generales.length > 0 ? (
        <div className="mt-4 flex flex-col w-[700px]">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <div className="flex flex-col gap-2 items-center" key={index}>
                {generale.contenuen && i18n.language === "en" ? (
                  <div className="mt-4 flex justify-center">
                    <HTMLRenderer
                      html={generale?.contenuen ? generale?.contenuen : ""}
                    />
                  </div>
                ) : (
                  <div className="mt-4 flex justify-center">
                    <HTMLRenderer
                      html={generale?.contenu ? generale?.contenu : ""}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      ) : (
        <h1>Pas de donnee pour l'instant</h1>
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
      {/* <div className="mt-4 flex justify-center">
        <img src="/assets/images/img_singleAloalo.svg" alt="singleAloalo" />
      </div> */}
    </div>
  );
};

export default Objectifs;
