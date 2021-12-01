import React from "react";
import "./Confirmation.css";
import Header from "../Header/Header";
import PetsIcon from "@mui/icons-material/Pets";
export default function Confirmation() {
  return (
    <div style={{height:"100vh",width:"20vw",display:"flex",alignItems:"center",margin:"auto"}}>
      <div className="Header-Div" >
        <PetsIcon style={{ position: "absolute", left:"4.5%" }}/>
        <h1 style={{fontFamily:"Comfortaa,cursive" }}>uPet</h1>
      </div>
    </div>
  );
}
