import React, { useEffect, useState } from "react";
import EnhancedTable, { HeadCell } from "../../../../../components/MRTable";
import RestaurerGenerale from "../../../../../usecases/Generale/RestaurerGenerale";
import CorbeilleGenerale from "../../../../../usecases/Generalec/CorbeilleGenerale";
import { formatDate } from "../../../../../utils/formatDate";

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

interface CORBEILLEProps {
  idCategorie: number;
  idRubrique: number;
  handleRefetchList: any;
}

const CORBEILLE: React.FC<CORBEILLEProps> = ({
  idCategorie,
  idRubrique,
  handleRefetchList,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataSourc, setDataSourc] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = React.useState<any>(null);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [refetch, setRefetch] = React.useState(false);

  useEffect(() => {
    const fetchActus = async () => {
      const data = await new CorbeilleGenerale().execute({
        idcategorie: idCategorie,
        idrubrique: idRubrique,
      });

      if (data) {
        setDataSourc(data);
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

  //   Delete
  const handleDelete = (record: any) => {
    setSelectedRow(record);
    setDeleteOpen(true);
  };

  const handleRest = async (record: any) => {
    await new RestaurerGenerale().execute(record.id);
    handleRefetch();
    handleRefetchList();
  };

  return (
    <div>
      <div className=" mx-4">
        <div className="flex justify-center ">
          <EnhancedTable
            columns={columns}
            rows={dataSourc}
            onEdit={handleEdit}
            onDelete={handleDelete}
            restaurer={{ see: handleRest, isPresent: true }}
          />
        </div>
      </div>
    </div>
  );
};

export default CORBEILLE;
