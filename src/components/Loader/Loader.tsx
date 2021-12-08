import React from "react";
import Api from "components/API/Api";
import ClipLoader from "react-spinners/ClipLoader";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useSelector, RootStateOrAny } from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  LoaderRoot: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  loaderPosition: {
    position: "absolute",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Loader() {
  const loaderState = useSelector((state: RootStateOrAny) => state.loaderKey);
  const LoaderClasses = useStyles();
  return (
    <div className={LoaderClasses.LoaderRoot}>
      <div className={LoaderClasses.loaderPosition}>
        <ClipLoader color={"#02E0B1"} loading={!!loaderState} size={50} />
      </div>
      <Api />
    </div>
  );
}
