import Banniere from "../../../../components/Banniere";
import Composantes from "../../aPropos/components/Composantes";

const BanniereCompo = () => {
  return (
    <div className="w-screen xl:h-[850px] relative xl:mb-[16rem] 2xl:mb-[42rem] ">
      <div className="relative">
        <img
          src="/assets/images/fondb.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hidden xl:block xl:absolute w-full bottom-0 z-10">
          <div className="flex justify-center w-full xl:-bottom-[240px] relative z-20">
            <Composantes />
          </div>
        </div>
      </div>
      <div className="flex w-full absolute z-30 top-4">
        <Banniere />
      </div>
    </div>
  );
};

export default BanniereCompo;
