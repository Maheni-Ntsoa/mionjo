import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import React, { useEffect, useState } from "react";
import Button from "../../../../../../components/Button";
import DetailRectangle from "../../../../../../components/DetailRectangle";
import EnhancedTable, { HeadCell } from "../../../../../../components/MRTable";
import MyModal from "../../../../../../components/MyModal";
import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
import GetIdee from "../../../../../../usecases/Idee/GetIdee";
import { formatDate } from "../../../../../../utils/formatDate";
import CorbeilleD from "./CorbeilleD";
const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "descriptif",
    numeric: false,
    disablePadding: false,
    label: "Descriptif",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date",
    renderCell: renderDateCell,
  },
];

const ListeDeposerPlainte = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [corbeille, setCorbeille] = React.useState(true);
  const [refetch, setRefetch] = React.useState(false);
  const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      const data = await new GetIdee().execute();

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
    await new DeleteGenerale().execute(selectedRow.id);
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
      <div className=" mx-4">
        <div className="mb-4">
          {!corbeille ? (
            <Button name="Voir liste" onClick={() => setCorbeille(true)} />
          ) : (
            <div className="flex gap-4 w-full justify-between">
              <div>
                <button
                  name=""
                  onClick={openModal}
                  className="bg-blue text-white w-[100px] h-[45px] rounded"
                >
                  <NoteAddIcon />
                  <span className="pt-2">Ajouter </span>{" "}
                </button>
              </div>
              <div className="">
                <DeleteSweepIcon
                  style={{ width: "40px", height: "40px" }}
                  name="Corbeille"
                  onClick={() => setCorbeille(false)}
                />
              </div>
            </div>
          )}
        </div>
        {!corbeille ? (
          <CorbeilleD handleRefetchList={handleRefetch} />
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
            {
              <MyModal onClose={handleSeeMoreClose} open={seeMoreOpen}>
                <DetailRectangle generalec={selectedRow} />
              </MyModal>
            }
            {/* Update */}
            {/* {updateOpen && (
          <MyModal onClose={handleUpdateClose}>
            <UpdateActualite
              buttonActiver={true}
              actualite={selectedRow}
              onClose={handleUpdateClose}
              refetch={handleRefetch}
            />
          </MyModal>
        )} */}
            {/* Delete  */}
            {/* {(
              <ConfirmationModal open={deleteOpen }
                closeModal={handleDeleteClose}
                accept={deleteActu}
                denied={handleDeleteClose}
              />
          )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default ListeDeposerPlainte;
