import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import GetPhotoByEvent from "../usecases/Photo/GetPhotoByEvent";
import Loading from "./Loading";

interface GalleryByEventProps {
  eventTitle: string;
}

const GalleryByEvent = ({ eventTitle }: GalleryByEventProps) => {
  const [toggler, setToggler] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const listImg = [];
      const imgs = await new GetPhotoByEvent().execute(eventTitle);
      if (imgs && imgs.length > 0) {
        for (let i = 0; i < imgs.length; i++) {
          listImg.push(
            `${process.env.REACT_APP_BACKEND_URL}uploads/photos/${imgs[i].nomphoto}`
          );
        }
      }
      if (imgs) {
        setImages(listImg);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onImageClick = (index: number) => {
    setCurrentImage(index + 1);
    setToggler(!toggler);
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <>
          {eventTitle && (
            <div className="flex justify-center items-center gap-4 px-14">
              <div className="border-b-2 border-brown w-full flex justify-center"></div>
              <h1
                className="w-full text-center text-xl lg:text-lg xl:text-2xl font-bold uppercase my-4 text-brown font-quicksand"
                style={{ whiteSpace: "nowrap" }}
              >
                {eventTitle}
              </h1>
              <div className="border-b-2 border-brown w-full flex justify-center"></div>
            </div>
          )}
          <div className="flex lg:justify-center justify-center flex-wrap gap-6 m-2">
            {images.map((image, index) => (
              <div className="w-72 h-72" key={index}>
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
        </>
      )}
    </div>
  );
};

export default GalleryByEvent;
