import React, { useState, useEffect } from "react";
import "./Loader.css";
import ClipLoader from "react-spinners/ClipLoader";
import AppleIcon from '@mui/icons-material/Apple';

export default function Splash() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="Splash">
      {loading ? (
        <ClipLoader color={"#02E0B1"} loading={loading} size={50} />
      ) : (
        <h1><AppleIcon/> API Page</h1>
      )}
    </div>
  );
}
