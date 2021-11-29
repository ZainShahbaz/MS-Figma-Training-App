import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
export default function Header() {
  return (
    <div id="HeaderID">
      {/* <img src="/images/DogPaw2.png" alt="not found"/> */}
      <PetsIcon
        className="PIcon"
        style={{ position: "absolute", left:"40%" }}
      />
      <h1 style={{ fontFamily: "Comfortaa,cursive", display:"flex", flexWrap:"wrap"  ,marginLeft:"23px" }}>uPet</h1>
    </div>
  );
}
