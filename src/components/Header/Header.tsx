import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  spalshDiv: {
    display: "flex",
  },
  headerID: {
    fontFamily: "Comfortaa,cursive",
  },
  pIcon: {
    position: "relative",
    marginTop: "7%",
  },
}));

export default function Header() {
  const headerClasses = useStyles();
  return (
    <div className={headerClasses.spalshDiv}>
      <PetsIcon className={headerClasses.pIcon} />
      <h1 className={headerClasses.headerID}>uPet</h1>
    </div>
  );
}
