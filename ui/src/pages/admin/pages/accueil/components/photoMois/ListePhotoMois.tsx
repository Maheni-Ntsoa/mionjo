import NoteAddIcon from "@mui/icons-material/NoteAdd";
import React, { useEffect, useState } from "react";
import Button from "../../../../../../components/Button";
import ConfirmationModal from "../../../../../../components/ConfirmationModal";
import EnhancedTable, { HeadCell } from "../../../../../../components/MRTable";
import MyModal from "../../../../../../components/MyModal";
import ShowPhoto from "../../../../../../components/ShowPhoto";
import DeletePhotoMois from "../../../../../../usecases/PhotoMois/DeletePhotoMois";
import GetPhotoMois from "../../../../../../usecases/PhotoMois/GetPhotoMois";
import { formatDate } from "../../../../../../utils/formatDate";
import AddPhotoVideo from "./AddphotoMois";
import CorbeilleEve from "./CorbeilleEve";

const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "nomphoto",
    numeric: false,
    disablePadding: false,
    label: "Photo",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date",
    renderCell: renderDateCell,
  },
];
const ListePhotoMois = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);
  const [corbeille, setCorbeille] = React.useState(true);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      const data = await new GetPhotoMois().execute();
      if (data) {
        setDataSource(data);
      }
    };
    fetchActus();
  }, [refetch]);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  const handleEdit = (record: any) => {
    setSelectedRow(record);
    setUpdateOpen(true);
    // console.log(record);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };
  // see more
  const handleSeeMore = (record: any) => {
    setSelectedRow(record);
    setSeeMoreOpen(true);
  };
  const handleSeeMoreClose = () => {
    setSeeMoreOpen(false);
  };
  //   Delete
  const handleDelete = (record: any) => {
    setSelectedRow(record);

    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const DeleteEve = async () => {
    new DeletePhotoMois().execute(selectedRow.id);
    handleRefetch();
    handleDeleteClose();
  };

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
        <div className="mb-4">
          {!corbeille ? (
            <Button name="Actualité" onClick={() => setCorbeille(true)} />
          ) : (
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
              <div className="">
                {/* <DeleteSweepIcon style={{ width: '40px', height: '40px' }} name="Corbeille" onClick={() => setCorbeille(false)} /> */}
              </div>
            </div>
          )}
        </div>
        {!corbeille ? (
          <CorbeilleEve handleRefetchList={handleRefetch} />
        ) : (
          <>
            <div className="flex justify-center ">
              <EnhancedTable
                columns={columns}
                rows={dataSource}
                onEdit={handleEdit}
                onDelete={handleDelete}
                seeMore={{ see: handleSeeMore, isPresent: true }}
              />
            </div>
            {/* see More */}
            {seeMoreOpen && (
              <MyModal onClose={handleSeeMoreClose} open={seeMoreOpen}>
                <ShowPhoto
                  image={`${process.env.REACT_APP_BACKEND_URL}uploads/photos/${selectedRow.nomphoto}`}
                />
              </MyModal>
            )}
            {/* Update */}
            {/* {updateOpen && (
            <MyModal onClose={handleUpdateClose}>
              <UpdateEvenement
                evenement={selectedRow}
                onclose={closeModal}
                refetch={handleRefetch}
                buttonActiver={true} />
            </MyModal>
          )} */}
            {/* Delete  */}
            {
              <ConfirmationModal
                open={deleteOpen}
                closeModal={handleDeleteClose}
                accept={DeleteEve}
                denied={handleDeleteClose}
              />
            }

            {modalIsOpen && (
              <MyModal onClose={closeModal} open={modalIsOpen}>
                <AddPhotoVideo onclose={closeModal} refetch={handleRefetch} />
              </MyModal>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ListePhotoMois;
