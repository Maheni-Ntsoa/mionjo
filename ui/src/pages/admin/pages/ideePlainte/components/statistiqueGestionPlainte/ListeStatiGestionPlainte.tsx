import React, { useEffect, useState } from "react";
import { HeadCell } from "../../../../../../components/MRTable";
import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import { formatDate } from "../../../../../../utils/formatDate";
import LIST from "../../../../components/shared/CRUD/LIST";

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
const ListeStatiGestionPlainte = () => {
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
        idcategorie: 5,
        idrubrique: 21,
      });

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
      <LIST idCategorie={5} idRubrique={21} />
    </div>
  );
};

export default ListeStatiGestionPlainte;
