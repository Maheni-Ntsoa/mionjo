interface OneLinkProps {
  link: string;
  imgRef: string;
}

const OneLink: React.FC<OneLinkProps> = ({ link, imgRef }) => {
  return (
    <div>
      <a href={link} target="_blank">
        <img src={imgRef} alt={imgRef} height={150} width={150} />
      </a>
    </div>
  );
};

export default OneLink;
