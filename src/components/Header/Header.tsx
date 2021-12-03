import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  SpalshDiv: {
    display: "flex",
  },
  HeaderID: {
    fontFamily: "Comfortaa,cursive",
  },
  PIcon: {
    position: "relative",
    marginTop: "7%",
  },
}));

export default function Header() {
  const HeaderClasses=useStyles();
  return (
    <div className={HeaderClasses.SpalshDiv}>
      <PetsIcon className={HeaderClasses.PIcon} />
      <h1 className={HeaderClasses.HeaderID}>uPet</h1>
    </div>
  );
}
