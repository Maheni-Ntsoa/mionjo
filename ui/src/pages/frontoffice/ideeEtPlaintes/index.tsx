import IdeePourLeSud from "./components/IdeePourLeSud";
import Plaintes from "./components/Plaintes";
import StatGestionPlainte from "./components/StatGestionPlainte";

const text = `Ecrivez-nous votre idée`;
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum libero ut volutpat elementum. Nullam non sem tristique, accumsan nibh eu, maximus ligula. In posuere, lacus eu pulvinar cursus, erat ante vulputate erat, a volutpat dui urna laoreet metus. Curabitur egestas justo at nibh imperdiet malesuada. Sed vestibulum sem eget orci maximus semper. Phasellus tellus tellus, porta sit amet lectus efficitur, egestas sodales risus. Curabitur iaculis convallis interdum. Quisque cursus posuere sapien rutrum venenatis. Phasellus et est et magna semper placerat. Nulla vel neque vel sem fermentum fermentum vel nec nulla. Donec pretium metus augue, vel interdum nisl iaculis at.`;
const image = "/assets/images/nestjs.png";

const IdeeEtPlaintes = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 font-proximaNova mx-2 lg:mx-8">
      <div className="flex justify-center my-12" id="ideesud">
        <IdeePourLeSud texte={text} />
      </div>
      <div className="flex justify-center my-12" id="deposer">
        <Plaintes />
      </div>
      <div className="flex justify-center my-12" id="stats">
        <StatGestionPlainte />
      </div>
    </div>
  );
};

export default IdeeEtPlaintes;
