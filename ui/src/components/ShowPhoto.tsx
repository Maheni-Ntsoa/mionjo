interface ShowPhotoProps {
  image: string;
}

const ShowPhoto = ({ image }: ShowPhotoProps) => {
  return (
    <>
      {image && (
        <div className="flex justify-center w-full h-full">
          <img src={image} alt="sary" width="100%" height="100%" />
        </div>
      )}
    </>
  );
};

export default ShowPhoto;
