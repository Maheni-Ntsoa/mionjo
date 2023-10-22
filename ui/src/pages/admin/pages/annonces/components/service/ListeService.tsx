import React, { useEffect, useState } from "react";
import { HeadCell } from "../../../../../../components/MRTable";
import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
import GetGeneralecByIdCateAndIdRubri from "../../../../../../usecases/Generalec/GetGeneralecByIdCateAndIdRubri";
import { formatDate, formatDateOnly } from "../../../../../../utils/formatDate";
import LIST from "../../../../components/shared/CRUD/LIST";

const renderDateCell = (row: any) => {
  return <span>{formatDate(row.datecreation)}</span>;
};

const renderDateCellDateLimit = (row: any) => {
  return <span>{formatDateOnly(row.datelimit)}</span>;
};

const columns: readonly HeadCell[] = [
  {
    id: "titre",
    numeric: false,
    disablePadding: false,
    label: "Nom de l'annonce",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date de création",
    renderCell: renderDateCell,
  },
  {
    id: "datelimit",
    numeric: false,
    disablePadding: false,
    label: "Date limite",
    renderCell: renderDateCellDateLimit,
  },
];

const ListeService = () => {
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
        idcategorie: 4,
        idrubrique: 17,
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
      <LIST idCategorie={4} idRubrique={17} />
    </div>
  );
};

export default ListeService;
