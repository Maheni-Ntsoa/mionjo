import React, { useEffect, useState } from "react";
import EnhancedTable, { HeadCell } from "../../../../../../components/MRTable";
import DeleteGenerale from "../../../../../../usecases/Generale/DeleteGenerale";
import RestaurerGenerale from "../../../../../../usecases/Generale/RestaurerGenerale";
import CorbeilleSIGenerale from "../../../../../../usecases/Generalec/CorbeilleGenerale";
import { formatDate } from "../../../../../../utils/formatDate";

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

interface CorbeilleSIProps {
    handleRefetchList: any;
}

const CorbeilleSI: React.FC<CorbeilleSIProps> = ({ handleRefetchList }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dataSourc, setDataSourc] = useState<any[]>([]);
    const [selectedRow, setSelectedRow] = React.useState<any>(null);
    const [updateOpen, setUpdateOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    const [refetch, setRefetch] = React.useState(false);

    useEffect(() => {
        const fetchActus = async () => {
            const data = await new CorbeilleSIGenerale().execute({
                idcategorie: 3,
                idrubrique: 14,
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

    const handleUpdateClose = () => {
        setUpdateOpen(false);
    };

    //   Delete
    const handleDelete = (record: any) => {
        setSelectedRow(record);
        setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };
    const handleRest = async (record: any) => {
        await new RestaurerGenerale().execute(record.id);
        handleRefetch();
        handleRefetchList()
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

export default CorbeilleSI;
