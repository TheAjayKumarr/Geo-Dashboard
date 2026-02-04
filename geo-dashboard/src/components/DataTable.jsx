import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";

function DataTable({
  rows,
  page,
  rowsPerPage,
  total,
  onPageChange,
  onRowClick,
  selectedId,
}) {
  return (
    <>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Updated</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              hover
              selected={row.id === selectedId}
              onClick={() => onRowClick(row.id)}
              style={{ cursor: "pointer" }}
              
            >
              <TableCell>{row.projectName}</TableCell>
              <TableCell>{row.latitude.toFixed(4)}</TableCell>
              <TableCell>{row.longitude.toFixed(4)}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.lastUpdated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        component="div"
        count={total}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        rowsPerPageOptions={[10]}
      />
    </>
  );
}

export default DataTable;
