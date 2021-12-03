import React, { useEffect } from "react";
import AppleIcon from '@mui/icons-material/Apple';
import axios from "axios";

export default function Api() {
  useEffect(() => {
    async function ApiData() {
      const res = await axios.get("https://api.publicapis.org/entries");
      console.log("API Data: ", res.data.entries);
    }
    ApiData();
  },[]);

  return (
    <div>
     <h1><AppleIcon/> API Page</h1>
     <h3>API data is in console.log</h3>
    </div>
  );
}
