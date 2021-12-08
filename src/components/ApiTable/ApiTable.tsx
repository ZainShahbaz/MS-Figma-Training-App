import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import { RootStateOrAny, useSelector } from "react-redux";

const useStyle = makeStyles((theme: Theme) => ({
  rootDiv: {
    maxHeight: "500px",
  },
}));

export default function ApiTable() {
  const tableData = useSelector((state: RootStateOrAny) => state.apiData);
  const tableClasses = useStyle();
  return (
    <div className={tableClasses.rootDiv}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>A P I</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((tableinfo: any) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {tableinfo.API}
                </TableCell>
                <TableCell align="right">{tableinfo.Description}</TableCell>
                <TableCell align="right">{tableinfo.Category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
