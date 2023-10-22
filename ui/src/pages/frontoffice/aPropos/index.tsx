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
      <div className="flex justify-center my-12 relative" id="zoneintervention">
        <div className="absolute top-0 left-0 bg-grey h-2/3 w-full z-0"></div>
        <div className="relative z-10 flex justify-center">
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
