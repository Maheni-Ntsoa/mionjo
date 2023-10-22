import { useState } from "react";
import Button from "../../../../../../components/Button";
import MyModal from "../../../../../../components/MyModal";
import AddRealisationForm from "./AddComposanteForm";

const ListeComposante = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div className="">
        {/* <div className="mt-20 border-b border-brown opacity-30 w-full"></div> */}
      </div>
      <div className=" mx-4">
        <Button name="Ajouter" onClick={openModal} />
        {/* <button>kokok</button> */}
        <div className="flex justify-center ">{/*<EnhancedTable />*/}</div>
        {modalIsOpen && (
          <MyModal onClose={closeModal}>
            <AddRealisationForm />
          </MyModal>
        )}
      </div>
    </div>
  );
};

export default ListeComposante;
