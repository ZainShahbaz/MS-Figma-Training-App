import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "US",
    label: "+1 - United States",
  },
  {
    value: "AUS",
    label: "+61 - Australia",
  },
  {
    value: "PAK",
    label: "🇵🇰 +92 - Pakistan",
  },
];

export default function Countries() {
  const [country, setCountry] = React.useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
  
    <div>
      <TextField
        select
        label="country select"
        value={country}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
    /* </Box> */
  );
}
