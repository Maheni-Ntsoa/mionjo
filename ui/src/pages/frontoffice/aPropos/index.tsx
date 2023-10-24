import Aproches from "./components/Aproches";
import Description from "./components/Description";
import Objectifs from "./components/Objectifs";
import ZoneIntervetion from "./components/ZoneIntervention";

const APropos = () => {
  return (
    <div className="font-proximaNova">
      <div className="flex justify-center my-12" id="description">
        <Description />
      </div>
      <div
        className="flex justify-center bg-blue py-4 pb-16 items-center"
        id="objectifs"
      >
        <Objectifs />
      </div>
      <div className="flex justify-center bg-white " id="objectifs">
        <Aproches />
      </div>
      <div className="bg-grey flex justify-center mt-6 p-8 " id="zoneintervention">
        <div className=" flex justify-center ">
          <ZoneIntervetion />
        </div>
      </div>

      {/* <div className="flex justify-center my-12" id="sudcontexte">
        <SudContexte />
      </div> */}
      {/* <div className="flex justify-center my-12" id="orga">
        <OrganisationInstitu />
      </div> */}
    </div>
  );
};

export default APropos;
