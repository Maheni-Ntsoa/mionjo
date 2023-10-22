import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogTitle, IconButton } from "@mui/material";

interface ConfirmationModalProps {
  closeModal: () => void;
  accept: () => void;
  denied: () => void;
  open: boolean;
}

const ConfirmationModal = ({
  closeModal,
  accept,
  denied,
  open,
}: ConfirmationModalProps) => {
  return (
    <Dialog
      open={open!}
      onClose={closeModal}
      className="bg-white border-2 border-gray-300 p-4 "
    >
      <DialogTitle>
        <IconButton edge="end" color="inherit" onClick={closeModal}>
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <div className="p-4 border-50">
        <div className="flex justify-center text-xl font-bold">
          Voulez-vous vraiment supprimer cet enregistrement ?
        </div>
        <div className="mt-10 flex w-full justify-center">
          <button
            type="button"
            className="z-50 mr-9 rounded-full bg-red text-white px-4 py-3"
            onClick={denied}
          >
            Annuler
          </button>
          <button
            type="button"
            className={`z-50 rounded-full bg-blue  text-white px-4 py-3`}
            onClick={accept}
          >
            Confirmer
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;
