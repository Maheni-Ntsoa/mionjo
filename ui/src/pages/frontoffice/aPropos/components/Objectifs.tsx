import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
            src="/assets/icons/ic_objet.png"
            height={150}
            width={150}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="Objectifs" className="text-white" />
        </div>
      </div>
      <div className="mt-4 flex flex-col w-[300px] md:w-[700px]">
        <div className="md:flex flex-col gap-2 px-0 items-center text-justify">
          <div className=" md:flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-xl"> {t("soutitre1Objectif")}</h1>
              <p className="text-lg">{t("texte1Objectif")}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-xl">{t("soutitre2Objectif")}</h1>
              <p className="text-lg">{t("texte2Objectif")}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold text-xl">
                {t("soutitre3Objectif")}</h1>
              <p className="text-lg">
                {t("texte3Objectif")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectifs;
