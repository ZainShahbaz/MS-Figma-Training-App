import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import AppleIcon from "@mui/icons-material/Apple";

export default function Api() {
  const data = useSelector((state: RootStateOrAny) => state.user);

  return (
    <div>
      <h1>
        <AppleIcon /> API Page
      </h1>
      <h3>API data is in console.log</h3>
      <br />
      <p>
        Data from Redux: <b>{data.firstName}</b>
        <br />
        User's Email: <b>{data.email}</b>{" "}
      </p>
    </div>
  );
}
