import React from "react";
import "./Header.css";
import PetsIcon from "@mui/icons-material/Pets";
export default function Header() {
  return (
    <div className="SplashDiv">
      <PetsIcon className="PIcon" />
      <h1 className="HeaderID">uPet</h1>
    </div>
  );
}
