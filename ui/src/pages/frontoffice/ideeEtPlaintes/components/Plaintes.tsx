import SubTitle from "../../../../components/SubTitle";
import DepotPlainteForm from "./DepotPlainteForm";

const Plaintes = () => {
  return (
    <div className="flex flex-col gap-4 mx-4">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <img
            src="/assets/icons/ic_depotplainte.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="DepPlaintes" />
        </div>
      </div>
      <div className="flex justify-center">
        <DepotPlainteForm />
      </div>
    </div>
  );
};

export default Plaintes;
