import BackspaceIcon from '@mui/icons-material/Backspace';
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import More from "@mui/icons-material/More";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";

interface Data {
  [key: string]: any;
}

type Order = "asc" | "desc";

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  renderCell?: (row: Data) => JSX.Element;
}

interface EnhancedTableProps {
  columns: readonly HeadCell[];
  rows: readonly Data[];
  onEdit: (row: Data) => void;
  onDelete: (row: Data) => void;
  seeMore?: { see: (row: Data) => void; isPresent: boolean };
  restaurer?: { see: (row: Data) => void; isPresent: boolean };
}

function EnhancedTable({
  columns,
  rows,
  onEdit,
  onDelete,
  seeMore,
  restaurer,

}: EnhancedTableProps) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("calories");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visibleRows, setVisibleRows] = useState<Data[]>([]);

  useEffect(() => {
    const updatedVisibleRows = stableSort(
      rows,
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    setVisibleRows(updatedVisibleRows);
  }, [rows, order, orderBy, page, rowsPerPage]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const descendingComparator = <T,>(a: T, b: T, orderBy: keyof T) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = <Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): ((
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
  ) => number) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = <T,>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
  ) => {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleEdit = (row: Data) => {
    onEdit(row);
  };

  const handleDelete = (row: Data) => {
    onDelete(row);
  };

  const handleSeeMore = (row: Data) => {
    seeMore?.see(row);
  };
  const handleRestaurer = (row: Data) => {
    restaurer?.see(row);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <TableHead sx={{ fontWeight: "bold" }}>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                {columns.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    padding={headCell.disablePadding ? "none" : "normal"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={(event) => handleRequestSort(event, headCell.id)}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <Box component="span">
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                ))}
                <TableCell>Actions</TableCell>
                {seeMore?.isPresent && <TableCell></TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={index}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox"></TableCell>
                    {columns.map((column, i) => (
                      <TableCell
                        key={i}
                        align={column.numeric ? "right" : "left"}
                      >
                        {column.renderCell
                          ? column.renderCell(row)
                          : row[column.id]}
                      </TableCell>
                    ))}
                    {restaurer?.isPresent ? (
                      <TableCell>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                          <Tooltip
                            arrow
                            placement="left"
                            title="Restaurer"
                          >
                            {/* <IconButton onClick={() => handleSeeMore(row)}>
                              <More />
                            </IconButton> */}
                            <Button sx={{ backgroundColor: "#234567" }} variant="contained" onClick={() => handleRestaurer(row)}>Restaurer</Button>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    ) : (
                      <TableCell>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                          <Tooltip
                            arrow
                            placement="left"
                            title="Voir plus"
                          >
                            <IconButton onClick={() => handleSeeMore(row)}>
                              <More />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow placement="left" title="Modifier">
                            <IconButton onClick={() => handleEdit(row)}>
                              <Edit />
                            </IconButton>
                          </Tooltip>
                          <Tooltip arrow placement="right" className='mt-2' title="Supprimer">
                            <BackspaceIcon
                              color="error"
                              onClick={() => handleDelete(row)}
                            >
                              <Delete />
                            </BackspaceIcon>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={columns.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default EnhancedTable;
