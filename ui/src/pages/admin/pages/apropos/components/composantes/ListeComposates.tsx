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
    id: "contenu",
    numeric: false,
    disablePadding: false,
    label: "Contenu",
  },
  {
    id: "datecreation",
    numeric: false,
    disablePadding: false,
    label: "Date",
    renderCell: renderDateCell,
  },
];

const ListeComposates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);
  const [updateOpen, setUpdateOpen] = React.useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      const data = await new GetGeneralecByIdCateAndIdRubri().execute({
        idcategorie: 2,
        idrubrique: 1,
      });
      // console.log(data);

      if (data) {
        setDataSource(data);
      }
    };
    fetchActus();
  }, []);

  const handleEdit = (record: any) => {
    setSelectedRow(record);
    setUpdateOpen(true);
    // console.log(record);
  };

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleDelete = async (record: any) => {
    record.idcategorie = 1;
    record.idrubrique = 1;
    await new DeleteGenerale().execute(record);
    console.log(record);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <LIST idCategorie={1} idRubrique={1} />
    </div>
  );
};

export default ListeComposates;
