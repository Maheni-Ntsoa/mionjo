import { AnimatePresence } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonImage from "../../../../components/ButtonImage";
import DetailRectangle from "../../../../components/DetailRectangle";
import MyModal from "../../../../components/MyModal";
import Generalec from "../../../../models/Generalec";

const HTMLRenderer = ({ html }: any) => {
  return (
    <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

interface OneResultProps {
  result: Generalec;
}

const OneResult: React.FC<OneResultProps> = ({ result }) => {
  const navigate = useNavigate();
  const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);

  const handleSeeMore = () => {
    setSeeMoreOpen(true);
  };
  const handleSeeMoreClose = () => {
    setSeeMoreOpen(false);
  };

  return (
    <div
      className="bg-white w-full p-2"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 5px 5px",
      }}
    >
      <div className="pl-32 mt-4 flex justify-start">
        <div className="flex flex-col">
          <h2 className="text-2xl text-black/70 font-bold ml-4 mb-2">{`${result.nomcategorie} - ${result.nomrubrique}`}</h2>
          <h3 className="text-xl text-black/70 font-bold ml-4 mb-2">
            {result.titre}
          </h3>
          <HTMLRenderer
            html={result ? result.contenu?.slice(0, 300)! + "" : ""}
          />
        </div>
      </div>
      <div className="pl-32 mt-4 flex justify-start mr-16">
        {/* <Button name="Voir plus" onClick={handleSeeMore} /> */}
        <ButtonImage src="Btnsavoir" onClick={handleSeeMore} />
      </div>
      <AnimatePresence>
        {
          <MyModal onClose={handleSeeMoreClose} open={seeMoreOpen}>
            <div className="flex justify-center text-xl">
              <DetailRectangle generalec={result!} />
            </div>
          </MyModal>
        }
      </AnimatePresence>
    </div>
  );
};

export default OneResult;
