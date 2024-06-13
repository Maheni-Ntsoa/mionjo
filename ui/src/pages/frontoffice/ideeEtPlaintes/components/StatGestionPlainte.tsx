import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";
import SubTitle from "../../../../components/SubTitle";
import GetGeneralecByIdCateAndIdRubri from "../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import GetEventStatPlainte from "../../../../usecases/Photo/GetEventStatPlainte";
import GetPhotoByIdGenerale from "../../../../usecases/Photo/GetPhotoByIdGenerale";
import GetStatPlainte from "../../../../usecases/Photo/GetStatPlainte";

const StatGestionPlainte = () => {
  const [loading, setLoading] = useState(false);
  const [generales, setGenerales] = useState<any[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [event, setEvent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [toggler, setToggler] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const itemsPerPage = 4;

  const onImageClick = (index: number) => {
    setCurrentImage(index + 1);
    setToggler(!toggler);
  };

  useEffect(() => {
    setLoading(true);
    const fetchGenerale = async () => {
      const eventPhoto = await new GetEventStatPlainte().execute();
      if (eventPhoto) {
        setEvent(eventPhoto[0]);
        const listImg = [];
        const imgs = await new GetStatPlainte().execute(eventPhoto[0]);
        if (imgs && imgs.length > 0) {
          for (let i = 0; i < imgs.length; i++) {
            listImg.push(
              `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${imgs[i].nomphoto}`
            );
          }
        }
        if (imgs) {
          setImages(listImg);
        }
      }
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
    <div className="flex flex-col justify-center items-center my-4">
      <div className="flex justify-center items-center w-full">
        <SubTitle title="StatPlaintes" />
      </div>
      <h1 className="w-full lg:whitespace-nowrap text-center text-xl lg:text-lg xl:text-2xl font-bold uppercase mb-6 text-brown font-quicksand">
        {event}
      </h1>
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 w-2/3">
          <div className="flex lg:justify-center justify-around flex-wrap gap-6 m-2">
            {images.map((image, index) => (
              <div className="w-80 h-80" key={index}>
                <img
                  src={image}
                  alt=""
                  className="cursor-pointer h-full w-full object-cover"
                  onClick={() => onImageClick(index)}
                />
              </div>
            ))}
            <FsLightbox
              toggler={toggler}
              sources={images}
              slide={currentImage}
              type={"image"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StatGestionPlainte;
