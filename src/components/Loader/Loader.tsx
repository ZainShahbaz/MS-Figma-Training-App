import React, { useState, useEffect } from "react";
import Api from "components/API/Api";
import ClipLoader from "react-spinners/ClipLoader";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  LoaderRoot: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function Loader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const LoaderClasses = useStyles();
  return (
    <div className={LoaderClasses.LoaderRoot}>
      {loading ? (
        <ClipLoader color={"#02E0B1"} loading={loading} size={50} />
      ) : (
        <Api />
      )}
    </div>
  );
}
