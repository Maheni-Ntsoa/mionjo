import ButtonImage from "../../../../components/ButtonImage";
import LongTexte from "../../../../components/LongTexte";
import SubTitle from "../../../../components/SubTitle";

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu, maximus ligula. In posuere, lacus eu pulvinar cursus, erat ante vulputate erat, a volutpat dui urna laoreet metus. Curabitur egestas justo at nibh imperdiet malesuada. Sed vestibulum sem eget orci maximus semper. Phasellus tellus tellus, porta sit amet lectus efficitur, egestas sodales risus. Curabitur iaculis convallis interdum. Quisque cursus posuere sapien rutrum venenatis. Phasellus et est et magna semper placerat. Nulla vel neque vel sem fermentum fermentum vel nec nulla. Donec pretium metus augue, vel interdum nisl iaculis at.`;
const images = [
  "/assets/images/nestjs.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
  "/assets/images/sequelize.png",
];

const SystEtSuiviEval = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <img
            src="/assets/icons/ic_systemeinfo.svg"
            height={60}
            width={60}
            alt="logo_mionjo"
          />
        </div>
        <div className="">
          <SubTitle title={`Système d'information et de suivi-évaluation`} />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex flex-col">
          <h3 className="text-xl text-green font-bold ml-4 mb-2">
            Présentation des données
          </h3>
          <LongTexte text={longText} />
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <ButtonImage src="BtnLearn" />
      </div>
      <div className="mt-4 flex justify-center">
        <img src="/assets/images/img_singleAloalo.svg" alt="singleAloalo" />
      </div>
    </div>
  );
};

export default SystEtSuiviEval;
