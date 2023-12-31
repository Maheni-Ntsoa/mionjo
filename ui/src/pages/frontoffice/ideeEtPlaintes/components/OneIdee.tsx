import { AnimatePresence } from "framer-motion";
import React from "react";
import Button from "../../../../components/Button";
import LongTexte from "../../../../components/LongTexte";
import MyModal from "../../../../components/MyModal";
import IdeeRecu from "../../../../models/IdeeRecu";
import { formatDate } from "../../../../utils/formatDate";

interface OneIdeeProps {
  idee: IdeeRecu;
}

const OneIdee: React.FC<OneIdeeProps> = ({ idee }) => {
  const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);

  const handleSeeMore = () => {
    setSeeMoreOpen(true);
  };
  const handleSeeMoreClose = () => {
    setSeeMoreOpen(false);
  };
  return (
    <div
      className="flex justify-start p-4"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex">
          <p className="font-bold">Idée reçu le : &nbsp;</p>
          <span>{formatDate(idee.datecreation)}</span>
        </div>
        <div className="text-sm flex">
          <div className="font-bold">Descriptif : &nbsp;</div>
          <LongTexte text={idee.descriptif!} />
        </div>
        <div className="text-sm">
          <div className="font-bold">Détail : </div>
          <LongTexte text={idee.contenu!} />
        </div>
        <AnimatePresence>
          {seeMoreOpen && (
            <MyModal onClose={handleSeeMoreClose}>
              <div className="flex justify-center text-xl">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <p className="font-bold">Idée reçu le : </p>
                    <span>{formatDate(idee.datecreation)}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Descriptif : </div>
                    <LongTexte text={idee.descriptif!} />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold">Détail : </div>
                    <LongTexte text={idee.contenu!} />
                  </div>
                </div>
              </div>
            </MyModal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OneIdee;
