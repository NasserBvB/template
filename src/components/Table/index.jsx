import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";
import PropTypes from "prop-types";
export default function DataTable({
  handleClickRow,
  handleSelectedChange,
  handlePageSizeChange,
  rows,
  columns,
}) {
 
  return (
    <TableWrapper>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        paginationMode="server"
        rowsPerPageOptions={[5, 10, 20]}
        onRowClick={handleClickRow}
        disableSelectionOnClick
        autoPageSize
        onSelectionChange={handleSelectedChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  height: 400px;
  width: 100%;
`;

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  handlePageSizeChange: PropTypes.func.isRequired,
  handleSelectedChange: PropTypes.func.isRequired,
  handleClickRow: PropTypes.func.isRequired,
};
