import React, { useState } from "react";
import Header from "../Header/Header";
import "./MainForm.css";
//Material-UI
import { makeStyles, createStyles, Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
//React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";
//Routing
import { useHistory } from "react-router-dom";
//Store
import store from "../../store/store";
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

// const muiStyles = makeStyles((theme: Theme) => {
//   createStyles({
//     root: {},
//     iconifyMain: {
//       height: "100%",
//       width: "100%",
//     },
//     iconifyMenu: {
//       height: "160%",
//       width: "30%",
//       position: "absolute",
//       left: "-13px",
//     },
//     iconifyMenuUS: {
//       width: "30%",
//       position: "absolute",
//       left: "-12px",
//       height: "90%",
//       borderRadius: "11px",
//     },
//     iconifyButtons: {
//       marginBottom: "7%",
//     },
//     errorMsg: {
//       color: "red",
//       fontSize: "small",
//       fontFamily: "Raleway, sans-serif",
//       display: "flex",
//     },
//     CountryImg:{
//       width:"100%"
//     }
//   });
// });

interface IFormInput {
  firstName: string;
  lastName: string;
  PhoneNumber: number;
  email: string;
  password: string;
}

export default function Mainform() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [country, setCountry] = React.useState<any>(countries.USA);

  const FlagsChanger = (country: any) => {
    setCountry(country);
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const FormSubmitHandler: SubmitHandler<IFormInput> = (data: IFormInput) => {
    history.push("./loading");
    console.log(data);
    store.dispatch({
      type: "ADD_DATA",
      payload: data,
    });
  };
  const [Fname, setFName] = useState("");
  const [Lname, setLName] = useState("");
  let FormChecker = false;
  //Redux

  return (
    <>
      <div className="Main-div">
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
                className="Fname"
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
                className="Lname"
                {...register("lastName", { required: true })}
                style={{ marginBottom: "20px", marginLeft: "6.5px" }}
                onInput={(evt: any) => {
                  const caps =
                    evt.target.value.charAt(0).toUpperCase() +
                    evt.target.value.slice(1);
                  setLName(caps);
                }}
              />
              {errors.firstName && (
                <span id="error-msg">
                  <b>First Name is required</b>
                  {(FormChecker = true)}
                </span>
              )}
              {errors.lastName && (
                <span id="error-msg2">
                  <b>Last Name is required</b>
                  {(FormChecker = true)}
                </span>
              )}
            </Box>
            <Button
              onClick={() => setOpen(true)}
              className="Country_btn"
              style={{ position: "absolute" }}
            >
              <img
                src={country.icon}
                alt={country.value}
                className="Country_img"
              />
            </Button>
            <Dialog
              disableEscapeKeyDown
              open={open}
              onClose={(
                event: React.SyntheticEvent<unknown>,
                reason?: string
              ) => {
                if (reason !== "backdropClick") {
                  setOpen(false);
                }
              }}
            >
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
              type="number"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              style={{ width: "80%", marginBottom: "20px", marginLeft: "20%" }}
              {...register("PhoneNumber", { required: true })}
            />
            {errors.PhoneNumber && (
              <span id="error-msg">
                <b>Phone Number is required</b>
                {(FormChecker = true)}
              </span>
            )}
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
                {(FormChecker = true)}
              </span>
            )}

            <TextField
              fullWidth
              type="password"
              label="Password"
              id="filled-adornment-password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)+$/,
              })}
              style={{ marginBottom: "20px" }}
            />
            {errors.password && (
              <span id="error-msg">
                <b>
                  {" "}
                  Oops! You need a password longer than 8 characters with
                  numbers and letters.
                </b>
                {(FormChecker = true)}
              </span>
            )}
            <input
              type="submit"
              value="N E X T"
              defaultValue="Next"
              id="DisBtn"
              style={{ height: "6vh" }}
              disabled={FormChecker}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}
