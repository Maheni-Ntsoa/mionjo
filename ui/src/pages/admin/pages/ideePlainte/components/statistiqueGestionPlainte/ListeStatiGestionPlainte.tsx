import NoteAddIcon from "@mui/icons-material/NoteAdd";
import React, { useEffect, useState } from "react";
import Button from "../../../../../../components/Button";
import ConfirmationModal from "../../../../../../components/ConfirmationModal";
import DetailRectangle from "../../../../../../components/DetailRectangle";
import EnhancedTable, { HeadCell } from "../../../../../../components/MRTable";
import MyModal from "../../../../../../components/MyModal";
import DeletePhoto from "../../../../../../usecases/Photo/DeletePhoto";
import GetAllStatPlainte from "../../../../../../usecases/Photo/GetAllStatPlainte";
import { formatDate } from "../../../../../../utils/formatDate";
import AddStatiGestionPlainte from "./AddStatiGestionPlainte";

const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "nomphoto",
    numeric: false,
    disablePadding: false,
    label: "Nom photo",
  },
  {
    id: "evenement",
    numeric: false,
    disablePadding: false,
    label: "Evenement",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date",
    renderCell: renderDateCell,
  },
];
const ListeStatiGestionPlainte = () => {
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
      const data = await new GetAllStatPlainte().execute();
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
    new DeletePhoto().execute(selectedRow.id);
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
          <></>
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
                <AddStatiGestionPlainte
                  onclose={closeModal}
                  refetch={handleRefetch}
                />
              </MyModal>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ListeStatiGestionPlainte;

// import React, { useEffect, useState } from "react";
// import { HeadCell } from "../../../../../../components/MRTable";
// import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
// import GetGeneralecByIdCateAndIdRubri from "../../../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
// import { formatDate } from "../../../../../../utils/formatDate";
// import LIST from "../../../../components/shared/CRUD/LIST";

// const renderDateCell = (row: any) => {
//   return <span>{formatDate(row.datecreation)}</span>;
// };

// const columns: readonly HeadCell[] = [
//   {
//     id: "nomcategorie",
//     numeric: false,
//     disablePadding: false,
//     label: "Onglet",
//   },
//   {
//     id: "nomrubrique",
//     numeric: false,
//     disablePadding: false,
//     label: "Rubrique",
//   },
//   {
//     id: "titre",
//     numeric: false,
//     disablePadding: false,
//     label: "Titre",
//   },
//   {
//     id: "datecreation",
//     numeric: false,
//     disablePadding: false,
//     label: "Date",
//     renderCell: renderDateCell,
//   },
// ];
// const ListeStatiGestionPlainte = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [dataSource, setDataSource] = useState<any[]>([]);
//   const [selectedRow, setSelectedRow] = React.useState<any>(null);
//   const [updateOpen, setUpdateOpen] = React.useState(false);
//   const [deleteOpen, setDeleteOpen] = React.useState(false);
//   const [corbeille, setCorbeille] = React.useState(true);
//   const [refetch, setRefetch] = React.useState(false);
//   const [seeMoreOpen, setSeeMoreOpen] = React.useState(false);

//   useEffect(() => {
//     const fetchActus = async () => {
//       const data = await new GetGeneralecByIdCateAndIdRubri().execute({
//         idcategorie: 5,
//         idrubrique: 21,
//       });

//       if (data) {
//         setDataSource(data);
//       }
//     };
//     fetchActus();
//   }, [refetch]);

//   const handleRefetch = () => {
//     setRefetch(!refetch);
//   };

//   //   Update
//   const handleEdit = (record: any) => {
//     setSelectedRow(record);
//     setUpdateOpen(true);
//   };

//   const handleUpdateClose = () => {
//     setUpdateOpen(false);
//   };
//   const handleSeeMore = (record: any) => {
//     setSelectedRow(record);
//     setSeeMoreOpen(true);
//   };
//   const handleSeeMoreClose = () => {
//     setSeeMoreOpen(false);
//   };
//   //   Delete
//   const handleDelete = (record: any) => {
//     setSelectedRow(record);
//     setDeleteOpen(true);
//   };

//   const handleDeleteClose = () => {
//     setDeleteOpen(false);
//   };

//   const deleteActu = async () => {
//     await new DeleteGenerale().execute(selectedRow.id);
//     handleRefetch();
//     handleDeleteClose();
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };
//   return (
//     <div>
//       <LIST idCategorie={5} idRubrique={21} />
//     </div>
//   );
// };

// export default ListeStatiGestionPlainte;
