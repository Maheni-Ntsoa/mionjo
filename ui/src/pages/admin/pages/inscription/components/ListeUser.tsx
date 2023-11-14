import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import ConfirmationModal from "../../../../../components/ConfirmationModal";
import DetailRectangle from "../../../../../components/DetailRectangle";
import EnhancedTable, { HeadCell } from "../../../../../components/MRTable";
import MyModal from "../../../../../components/MyModal";
import ListUser from "../../../../../usecases/user/ListUser";
import { formatDate } from "../../../../../utils/formatDate";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "nomrole",
    numeric: false,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date",
    renderCell: renderDateCell,
  },
];

const ListeUser = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [corbeille, setCorbeille] = React.useState(true);
  const [refetch, setRefetch] = React.useState(false);
  const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      const data = await new ListUser().execute();
      if (data) {
        setDataSource(data);
      }
    };
    fetchActus();
  }, [refetch]);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  //   Update
  const handleEdit = (record: any) => {
    setSelectedRow(record);
    setUpdateOpen(true);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };
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

  const deleteActu = async () => {
    // await new DeleteGenerale().execute(selectedRow.id);
    handleRefetch();
    setIsSuccess(true);
    handleDeleteClose();
  };

  //   Add
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className=" mx-4">
        <div className="mb-4 mt-8">
          {!corbeille ? (
            <Button name="Voir liste" onClick={() => setCorbeille(true)} />
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
            </div>
          )}
        </div>
        <div className="flex w-full px-2">
          <EnhancedTable
            columns={columns}
            rows={dataSource}
            onEdit={handleEdit}
            onDelete={handleDelete}
            seeMore={{ see: handleSeeMore, isPresent: true }}
          />
        </div>
        {/* see More */}
        {
          <MyModal onClose={handleSeeMoreClose} open={seeMoreOpen}>
            <DetailRectangle generalec={selectedRow} />
          </MyModal>
        }
        {/* Update */}

        <MyModal onClose={handleUpdateClose} open={updateOpen}>
          <UpdateUser
            buttonActiver={true}
            user={selectedRow}
            onClose={handleUpdateClose}
            refetch={handleRefetch}
          />
        </MyModal>

        {/* Delete  */}
        <ConfirmationModal
          open={deleteOpen}
          closeModal={handleDeleteClose}
          accept={deleteActu}
          denied={handleDeleteClose}
        />
        {/* Ajout */}
        <MyModal onClose={closeModal} open={modalIsOpen}>
          <AddUser refetch={handleRefetch} onClose={closeModal} />
        </MyModal>
      </div>
    </div>
  );
};

export default ListeUser;
