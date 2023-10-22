import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import React, { useEffect, useState } from "react";
import Button from "../../../../../../components/Button";
import ConfirmationModal from "../../../../../../components/ConfirmationModal";
import DetailRectangle from "../../../../../../components/DetailRectangle";
import EnhancedTable, { HeadCell } from "../../../../../../components/MRTable";
import MyModal from "../../../../../../components/MyModal";
import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import { formatDate } from "../../../../../../utils/formatDate";
import AddRealisationForm from "./AddRealisationForm";
import CorbeilleRL from "./CorbeilleRL";
import UpdateRealisationLocalite from "./UpdateRealisationLocalite";

const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "nomcategorie",
    numeric: false,
    disablePadding: false,
    label: "Categorie",
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

const ListeRealisationLocalite = () => {
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
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 3,
        idrubrique: 12,
      });
      // console.log(data);

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

  const Delete = async () => {
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
          <CorbeilleRL handleRefetchList={handleRefetch} />
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
            {
              <MyModal onClose={handleUpdateClose} open={updateOpen}>
                <UpdateRealisationLocalite
                  realisationlocalite={selectedRow}
                  onclose={handleUpdateClose}
                  refetch={handleRefetch}
                />
              </MyModal>
            }
            {/* Delete  */}
            {
              <ConfirmationModal
                open={deleteOpen}
                closeModal={handleDeleteClose}
                accept={Delete}
                denied={handleDeleteClose}
              />
            }
            {/* Ajout */}
            {
              <MyModal onClose={closeModal} open={modalIsOpen}>
                <AddRealisationForm
                  refetch={handleRefetch}
                  onClose={closeModal}
                />
              </MyModal>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default ListeRealisationLocalite;
