interface OneSudContexteProps {
  socioText: string;
  title: string;
  image: string;
}

const OneSudContexte: React.FC<OneSudContexteProps> = ({
  socioText,
  title,
  image,
}) => {
  const HTMLRenderer = ({ html }: any) => {
    return (
      <div
        className="h-full w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  };

  return (
    <div className="mt-4 flex flex-col justify-between gap-4 px-8 w-full lg:flex-row">
      <div className="flex flex-col lg:w-1/2">
        <div className="flex gap-4 ml-4">
          <img
            src="/assets/icons/ic_info.svg"
            alt="info"
            height={25}
            width={25}
          />{" "}
          <span className="font-semibold text-green text-md">{title}</span>
        </div>
        <div className="">
          <HTMLRenderer html={socioText ? socioText : ""} />
        </div>
      </div>
      <div className="lg:w-auto">
        <img src={image} alt="rectangle" width={500} height={500} />
      </div>
    </div>
  );
};

export default OneSudContexte;
