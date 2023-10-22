import { useTranslation } from "react-i18next";
import Compos from "./Compos";

const descriText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu, maximus ligula. In posuere, lacus eu pulvinar cursus, erat ante vulputate erat, a volutpat dui urna laoreet metus. Curabitur egestas justo at nibh imperdiet malesuada. Sed vestibulum sem eget orci maximus semper. Phasellus tellus tellus, porta sit amet lectus efficitur, egestas sodales risus. Curabitur iaculis convallis interdum. Quisque cursus posuere sapien rutrum venenatis. Phasellus et est et magna semper placerat. Nulla vel neque vel sem fermentum fermentum vel nec nulla. Donec pretium metus augue, vel interdum nisl iaculis at.
Praesent dictum ante et magna fermentum, ac pellentesque mi vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed porta risus eu eleifend porttitor. Sed ultricies, tellus eu posuere condimentum, nisi augue tincidunt libero, eget ornare risus elit a nunc. Sed purus dui, convallis id leo at, porttitor varius felis. In orci massa, semper non lectus nec, tristique commodo metus. Etiam velit leo, euismod ut ipsum sed, vehicula ultricies sapien. Proin posuere nulla ac eros laoreet convallis.`;

const Composantes = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col mt-12">
      {/* <SubTitle title="compo" className="text-[60px] font-bold text-center text-white upercase mb-8" /> */}
      <div>
        <h1 className="text-[60px] font-bold text-center text-white uppercase mb-8">{t("compo")}</h1>
      </div>

      {/* <div className="flex justify-center items-center gap-4">
        <div className="">
          <img
            src="/assets/icons/ic_compo.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title="Composantes" />
        </div>
      </div> */}
      <Compos />
      {/* <div className="mt-4 flex justify-center">
        <img src="/assets/images/img_singleAloalo.svg" alt="singleAloalo" />
      </div> */}
    </div>
  );
};

export default Composantes;
