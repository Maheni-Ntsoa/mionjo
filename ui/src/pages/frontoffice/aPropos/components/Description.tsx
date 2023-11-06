import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";

const Description = () => {
  const { i18n } = useTranslation();
  const [generales, setGenerales] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 1;
  const { t } = useTranslation();

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
        idrubrique: 6,
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
    <div className="flex flex-col bg-grey w-screen">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <img
            src="/assets/icons/ic_descri.png"
            height={150}
            width={150}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="Description" className="" />
        </div>
      </div>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex flex-col md:flex-row flex justify-center gap-8  xl:px-12">
          {generales
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((generale, index) => (
              <>
                <div className="flex flex-col" key={index}>
                  <div className="flex justify-center md:justify-start items-center">
                    <img
                      src={generale.img}
                      alt="rectangle"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                <div className="md:mt-4 flex justify-center md:justify-start text-justify w-[300px]  h:-[250px] md:w-[500px] md:h-[500px]">
                  {/* {generale.contenuen && i18n.language === "en" ? (
                    <div className="mt-4 flex justify-center px-4 items-center">
                      <HTMLRenderer
                        html={generale?.contenuen ? generale?.contenuen : ""}
                      />
                    </div>
                  ) : (
                    <div className="mt-4 flex justify-center px-4 items-center">
                      <HTMLRenderer
                        html={generale?.contenu ? generale?.contenu : ""}
                      />
                    </div>
                  )} */}
                  {t("texteDescription")}
                </div>
              </>
            ))}
        </div>
      )}

    </div>
  );
};

export default Description;
