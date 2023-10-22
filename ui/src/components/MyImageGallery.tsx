import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "./Loading";

interface MyImageGalleryProps {
  images: string[];
}

const MyImageGallery = ({ images }: MyImageGalleryProps) => {
  const [toggler, setToggler] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const [image, setImage] = useState("");
  const [updateOpen, setUpdateOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(images.length / itemsPerPage);

  useEffect(() => {
    setLoading(true);
    if (images) {
      setLoading(false);
    }
  }, []);

  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };

  const handleEdit = (record: string) => {
    setImage(record);
    setUpdateOpen(true);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const onImageClick = (index: number) => {
    setCurrentImage(index + 1);
    setToggler(!toggler);
  };

  return (
    <div className="flex flex-col">
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <div className="flex lg:justify-center justify-center flex-wrap gap-8 m-2">
          {images
            .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
            .map((image, index) => (
              <div className="w-96 h-96" key={index}>
                <img
                  src={image}
                  alt=""
                  className="cursor-pointer h-full w-full object-cover"
                  // onClick={() => handleEdit(image)}
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
          {/* {
            <MyModal onClose={handleUpdateClose} open={updateOpen}>
              <ShowPhoto image={image} />
            </MyModal>
          } */}
        </div>
      )}

      {!loading && images.length > 4 && (
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
            pageRangeDisplayed={4}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      )}
    </div>
  );
};

export default MyImageGallery;
