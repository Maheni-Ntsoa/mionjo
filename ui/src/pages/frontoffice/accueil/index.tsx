import Banniere from "../../../components/Banniere";
import Edito from "../../../components/Edito";
import Composantes from "../aPropos/components/Composantes";
import Actualite from "./components/Actualite";
import BanniereCompo from "./components/BanniereCompo";
import MyCarousel from "./components/Carousel";
import ContactUs from "./components/ContactUs";
import Events from "./components/Events";
import ImgAndVideos from "./components/ImgAndVideos";
import UsefulLink from "./components/UsefulLink";

const Accueil = () => (
  <div className="font-proximaNova flex flex-col lg:gap-24">
    <div className="">
      <MyCarousel />
    </div>
    <div className="flex justify-center">
      <Edito />
    </div>
    <div className="hidden xl:flex justify-center" id="composantes">
      <BanniereCompo />
    </div>
    <div className="flex justify-center xl:hidden">
      <Banniere />
    </div>
    <div className="flex justify-center xl:hidden" id="composantes">
      <Composantes />
    </div>
    <div className="flex justify-center" id="actualites">
      <Actualite />
    </div>
    <div className="flex justify-center" id="events">
      <Events />
    </div>
    <div className="flex justify-center" id="imgvideos">
      <ImgAndVideos />
    </div>
    <div className="flex flex-col lg:flex lg:flex-row gap-8" id="usefullinks">
      <UsefulLink />
      <ContactUs />
    </div>
    {/* <div className="flex justify-center mb-12" id="contactus">
    </div> */}
  </div>
);

export default Accueil;
