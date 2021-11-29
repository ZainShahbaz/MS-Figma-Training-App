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
// const countries = [
//   {
//     value: "USD",
//     label: "$",
//   },
//   {
//     value: "AUS",
//     label: "A$",
//   },
//   {
//     value: "PAK",
//     label: "PKR",
//   },
// ];
interface IFormInput {
  firstName: string;
  lastName: string;
  PhoneNumber: number;
  email: string;
  password: string;
}

export default function Mainform() {
  const [open, setOpen] = React.useState(false);
  // const [age, setAge] = React.useState<number | string>('');

  // const handleChange = (event: SelectChangeEvent<typeof age>) => {
  //   setAge(Number(event.target.value) || '');
  // };

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
  let pakFlag = "🇵🇰";

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
            <TextField
              fullWidth
              id="fullWidth"
              label="First Name"
              variant="outlined"
              value={Fname}
              {...register("firstName", { required: true })}
            
              onInput={(evt: any) => {
                const caps =
                  evt.target.value.charAt(0).toUpperCase() +
                  evt.target.value.slice(1);
                setFName(caps);
              }}
              // ref={register}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={Lname}
              {...register("lastName", { required: true })}
              style={{ marginBottom: "20px" }}
              onInput={(evt: any) => {
                const caps =
                  evt.target.value.charAt(0).toUpperCase() +
                  evt.target.value.slice(1);
                setLName(caps);
              }}
            />
            <br />

            <Button onClick={handleClickOpen}>
              <span className="iconify iconify-main" data-icon="cif:us"></span>
            </Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
              <DialogTitle>Select Country</DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  <FormControl sx={{ m: 1, minWidth: 230, minHeight: 140 }}>
                    <InputLabel htmlFor="demo-dialog-native">
                      Select Country
                    </InputLabel>
                    <Select>
                      {/*  native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />} */}
                      {/* <option /> */}

                      <MenuItem value=""></MenuItem>
                      <MenuItem>
                        <span
                          className="iconify iconify-menu"
                          data-icon="cif:us"
                        ></span>{" "}
                        +1- United States
                      </MenuItem>
                      <MenuItem>
                        <span
                          className="iconify iconify-menu"
                          data-icon="twemoji:flag-for-flag-australia"
                        ></span>{" "}
                        +61- Australia
                      </MenuItem>
                      <MenuItem>
                        <span
                          className="iconify iconify-menu"
                          data-icon="twemoji:flag-for-flag-pakistan"
                        ></span>{" "}
                        +92- Pakistan
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Ok</Button>
              </DialogActions>
            </Dialog>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              {...register("PhoneNumber", { required: true })}
              style={{ marginBottom: "20px" }}
            />
            {/* <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    > */}
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
            {errors.email && <span id="error-msg">Invalid email address</span>}
            {/* </Box> */}

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
            />
            {errors.password && (
              <span id="error-msg">
                Oops! You need a password longer than 8 characters with numbers
                and letters.
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
