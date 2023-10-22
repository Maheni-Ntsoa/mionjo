import RealiParCompo from "./components/RealiParCompo";

const Realisations = () => {
  return (
    <div className="font-proximaNova mx-2 lg:mx-8">
      <div className="flex justify-center my-12" id="composante">
        <RealiParCompo />
      </div>
      {/* <div className="flex justify-center my-12" id="localite">
        <RealLocalite />
      </div> */}

      {/* <div className="flex justify-center my-12" id="sise">
        <SystEtSuiviEval />
      </div> */}
    </div>
  );
};

export default Realisations;
