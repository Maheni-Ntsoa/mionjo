import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useState } from "react";
import MyModal from "../../../../../../components/MyModal";
import AddLiensUtiles from "./AddLiensUtiles";

const ListeLiensUtiles = () => {
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
        <div className="flex gap-4 w-full justify-between">
          <div>
            <button
              name="Ajouter"
              onClick={openModal}
              className="bg-blue text-white w-[100px] h-[45px] rounded"
            >
              <NoteAddIcon />
              <span className="pt-2">Ajouter </span>{" "}
            </button>
          </div>
          {/* <div className=''>
                <DeleteSweepIcon style={{ width: '40px', height: '40px' }} name="Corbeille" onClick={() => setCorbeille(false)} />
              </div> */}
        </div>
        {/* <button>kokok</button> */}
        <div className="flex justify-center ">{/*<EnhancedTable />*/}</div>
        {modalIsOpen && (
          <MyModal onClose={closeModal}>
            <AddLiensUtiles />
          </MyModal>
        )}
      </div>
    </div>
  );
};

export default ListeLiensUtiles;
