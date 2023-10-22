import { CloseRounded } from "@mui/icons-material";
import { Dialog, DialogTitle, IconButton } from "@mui/material";

interface MyModalProps {
  onClose: () => void;
  open?: boolean;
  children: React.ReactNode;
}

const MyModal = ({ onClose, children, open }: MyModalProps) => {
  return (
    // <motion.div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center">
    //   <div className="blur-background absolute h-full w-full"></div>
    //   <motion.div
    //     initial={{
    //       scale: 0,
    //     }}
    //     animate={{
    //       scale: 1,
    //     }}
    //     exit={{
    //       scale: 0,
    //     }}
    //     className="relative flex justify-center rounded-3xl bg-white p-4 lg:max-w-[1000px]"
    //   >
    //     <button
    //       className="absolute -right-5 -top-5 rounded-full bg-blue"
    //       onClick={onClose}
    //     >
    //       <img
    //         src="/assets/icons/ic_close.svg"
    //         className="scale-150 transform p-2"
    //       />
    //     </button>
    //     <motion.div className="md:max-w-[720px] lg:max-w-[980px] xl:max-w-[1410px] max-w-[350px] px-6 py-4 max-h-[700px] overflow-y-auto">
    //       <div className="">
    //         {children}
    //       </div>
    //     </motion.div>
    //   </motion.div>
    // </motion.div>


    <Dialog
      fullScreen
      open={open!}
      onClose={onClose}
      className="bg-white border-2 border-gray-300 p-4 ">
      <DialogTitle>
        <IconButton edge="end" color="inherit" onClick={onClose}>
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <div className="p-4 border-50 flex justify-center">
        {children}
      </div>
    </Dialog>

  );
};

export default MyModal;
