import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";

const ZoneIntervetion = () => {
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
        idrubrique: 9,
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
    <div className="flex flex-col h-auto w-2/3 justify-center items-center">
      <div className="flex justify-center items-center">
        {/* <div className="">
          <img
            src="/assets/icons/ic_zonei.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div> */}
        <div className="">
          <SubTitle title="Zones" />
        </div>
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex flex-col  justify-center">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <div className="flex flex-col gap-2 justify-center" key={index}>
                {generale.contenuen && i18n.language === "en" ? (
                  <div className="mt-4 flex justify-center ">
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
                <div className="mt-4 flex justify-center">
                  <img src="/assets/images/zonei.png" alt="rectangle" />
                </div>
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
      {/* <div className="mt-4 flex justify-center">
        <img src="/assets/images/img_singleAloalo.svg" alt="singleAloalo" />
      </div> */}
    </div>
  );
};

export default ZoneIntervetion;
