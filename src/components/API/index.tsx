import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import ApiTable from "components/ApiTable";

export default function Api() {
  const data = useSelector((state: RootStateOrAny) => state.user);

  return (
    <div>
      <Typography variant="h1" component="div" gutterBottom>
        <b> API Page</b>
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        <AppleIcon /> Showing first <b>fifty</b> (50) objects data 
      </Typography>
      <br />
      <Typography variant="subtitle1" gutterBottom component="div">
        Data from Redux: <b>{data.firstName}</b>
        <br />
        User's Email: <b>{data.email}</b>{" "}
      </Typography>
      <br />
      <ApiTable />
    </div>
  );
}
