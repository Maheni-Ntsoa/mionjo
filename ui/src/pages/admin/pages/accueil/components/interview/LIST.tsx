import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import React, { useEffect, useState } from "react";
import Button from "../../../../../../components/Button";
import ConfirmationModal from "../../../../../../components/ConfirmationModal";
import EnhancedTable, { HeadCell } from "../../../../../../components/MRTable";
import MyModal from "../../../../../../components/MyModal";
import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
import GetInterview from "../../../../../../usecases/Generalec/GetInterview";
import { formatDate } from "../../../../../../utils/formatDate";
import DetailRectangleAdmin from "../../../../components/DetailRectangleAdmin";
import ADDI from "./ADD";
import CORBEILLE from "./CORBEILLE";
import UPDATEI from "./UPDATE";

const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "nomcategorie",
    numeric: false,
    disablePadding: false,
    label: "Onglet",
  },
  {
    id: "nomrubrique",
    numeric: false,
    disablePadding: false,
    label: "Rubrique",
  },
  {
    id: "titre",
    numeric: false,
    disablePadding: false,
    label: "Titre",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date",
    renderCell: renderDateCell,
  },
];

interface LISTIProps {
  idCategorie: number;
  idRubrique: number;
}

const LISTI: React.FC<LISTIProps> = ({ idCategorie = 8, idRubrique = 28 }) => {
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
      const data = await new GetInterview().execute();

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
        <div className="mb-4">
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
          <CORBEILLE
            handleRefetchList={handleRefetch}
            idCategorie={idCategorie}
            idRubrique={idRubrique}
          />
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
                <DetailRectangleAdmin generalec={selectedRow} />
              </MyModal>
            }
            {/* Update */}
            {
              <MyModal onClose={handleUpdateClose} open={updateOpen}>
                <UPDATEI
                  buttonActiver={true}
                  generalec={selectedRow}
                  refetch={handleRefetch}
                />
              </MyModal>
            }
            {/* Delete  */}
            {
              <ConfirmationModal
                open={deleteOpen}
                closeModal={handleDeleteClose}
                accept={deleteActu}
                denied={handleDeleteClose}
              />
            }
            {/* Ajout */}
            {
              <MyModal onClose={closeModal} open={modalIsOpen}>
                <ADDI
                  idCategorie={idCategorie}
                  idRubrique={idRubrique}
                  refetch={handleRefetch}
                />
              </MyModal>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default LISTI;
