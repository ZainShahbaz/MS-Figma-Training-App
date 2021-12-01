import React, { useState } from "react";
import Header from "../Header/Header";
import "./MainForm.css";
//Material-UI
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

//Some IntialStates
let emailValid = false;
let passValid = true;
let submitBtn = true;

const countries: any = {
  USA: {
    value: "+1-USA",
    icon: "images/united-states.png",
  },
  AUS: {
    value: "+61-AUS",
    icon: "images/australia.png",
  },
  PAK: {
    value: "+92-PAK",
    icon: "images/pakistan.png",
  },
};

interface IFormInput {
  firstName: string;
  lastName: string;
  PhoneNumber: number;
  email: string;
  password: string;
}

export default function Mainform() {
  const [open, setOpen] = React.useState(false);

  const [country, setCountry] = React.useState<any>(countries.USA);

  const FlagsChanger = (country: any) => {
    setCountry(country);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const FormSubmitHandler: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data);
  };
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");

  return (
    <>
      <div className="Main-div" style={{}}>
        <div className="FormDiv">
          <Header />
          <form onSubmit={handleSubmit(FormSubmitHandler)}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 0.8, width: "17ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-size-normal"
                label="First Name"
                value={Fname}
                style={{ marginRight: "5.75%" }}
                {...register("firstName", { required: true })}
                onInput={(evt: any) => {
                  const caps =
                    evt.target.value.charAt(0).toUpperCase() +
                    evt.target.value.slice(1);
                  setFName(caps);
                }}
              />
              <TextField
                id="outlined-size-normal"
                label="Last Name"
                value={Lname}
                {...register("lastName", { required: true })}
                style={{ marginBottom: "20px", marginLeft: "6.5px" }}
                onInput={(evt: any) => {
                  const caps =
                    evt.target.value.charAt(0).toUpperCase() +
                    evt.target.value.slice(1);
                  setLName(caps);
                }}
              />
            </Box>
            <Button
              onClick={handleClickOpen}
              className="Country_btn"
              style={{ position: "absolute" }}
            >
              <img
                src={country.icon}
                alt={country.value}
                className="Country_img"
              />
            </Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogTitle>Select Country</DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  <FormControl sx={{ m: 1, minWidth: 230, minHeight: 140 }}>
                    <MenuItem value=""></MenuItem>
                    {Object.keys(countries).map((country, index) => (
                      <Button
                        key={index}
                        style={{ marginBottom: "7%" }}
                        className="Country_btn"
                        onClick={() => FlagsChanger(countries[country])}
                      >
                        <img
                          src={countries[country].icon}
                          alt={countries[country].value}
                          className="Country_img2"
                        />
                        {countries[country].value}
                      </Button>
                    ))}
                  </FormControl>
                </Box>
              </DialogContent>
            </Dialog>
            <TextField
              // fullWidth
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              style={{ width: "80%", marginBottom: "20px", marginLeft: "20%" }}
              {...register("PhoneNumber", { required: true })}
            />
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              style={{ marginBottom: "20px" }}
            />
            {errors.email && (
              <span id="error-msg">
                <b>Invalid email address</b>
              </span>
            )}

            <TextField
              fullWidth
              type="password"
              label="Password"
              id="filled-adornment-password"
              {...register("password", {
                required: true,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)+$/,
              })}
              style={{ marginBottom: "20px" }}
              // onChange={(evt:any) => {
              //   console.log(evt.target.innerHTML);
              // }}
            />
            {errors.password && (
              <span id="error-msg">
                <b>
                  {" "}
                  Oops! You need a password longer than 8 characters with
                  numbers and letters.
                </b>
              </span>
            )}
            <input
              type="submit"
              defaultValue="Next"
              value="NEXT"
              style={{ height: "6vh" }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
