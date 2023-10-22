import Rectangle from "../../../../components/Rectangle";

const Rectangles = () => {
  const nbre = [1, 2, 3, 4];
  return (
    <div className="">
      <div className="flex flex-col  lg:flex-row gap-4">
        {nbre.map((index) => (
          <Rectangle key={index} />
        ))}
      </div>
    </div>
  );
};

export default Rectangles;
