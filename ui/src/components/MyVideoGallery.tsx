import { useState } from "react";
import ReactPaginate from "react-paginate";
import ReactPlayer from "react-player/lazy";

interface MyVideoGalleryProps {
  videos: string[];
}

const MyVideoGallery = ({ videos }: MyVideoGalleryProps) => {
  const [toggler, setToggler] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(videos.length / itemsPerPage);
  const handlePageClick = (selectedPage: { selected: number }) => {
    setPageNumber(selectedPage.selected);
  };

  const onVideoClick = (index: number) => {
    setCurrentVideo(index);
    setToggler(!toggler);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full flex-wrap gap-2 mx-auto">
        {videos
          .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
          .map((video, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 border-black border p-2 rounded-lg cursor-pointer"
              onClick={() => onVideoClick(index)}
            >
              <div className="p-2 flex items-center">
                <ReactPlayer
                  url={video}
                  width={350}
                  height={350}
                  controls={true}
                />{" "}
                {/* Ajoutez la propriété controls={true} ici */}
              </div>
              {/* <p className="flex items-center text-center ">
                Cliquer pour voir la vidéo
              </p> */}
            </div>
          ))}
        {/* <FsLightbox
          toggler={toggler}
          sources={videos}
          slide={currentVideo + 1}
          type="video"
        /> */}
      </div>
      {!loading && videos.length > itemsPerPage && (
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

export default MyVideoGallery;
