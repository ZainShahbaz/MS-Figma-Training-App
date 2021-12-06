import React from "react";
import Header from "components/Header/Header";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { mainFormData } from "store/actions/mainForm/index";

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

const useStyles = makeStyles((theme: Theme) => ({
  bgMain: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#E5E5E5",
    display: "flex",
    alignItems: "center",
    margin: "auto",
  },
  root: {
    height: "65%",
    width: "20%",
    borderRadius: "5px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "white",
  },
  iconifyMain: {
    height: "100%",
    width: "100%",
  },
  iconifyMenu: {
    height: "160%",
    width: "30%",
    position: "absolute",
    left: "-13px",
  },
  iconifyMenuUS: {
    width: "30%",
    position: "absolute",
    left: "-12px",
    height: "90%",
    borderRadius: "11px",
  },
  iconifyButtons: {
    marginBottom: "7%",
  },
  phoneNumber: {
    width: "80%",
    margin: "0 0 20px 20% !important",
    display: "flex",
  },
  errorMsg: {
    color: "red",
    fontSize: "small",
    fontFamily: "Raleway, sans-serif",
    display: "flex",
  },
  CountryImg: {
    width: "45px",
    cursor: "pointer",
  },
  CountryBtn: {
    width: "20%",
    padding: "0px 10px !important",
    margin: "5px 10px !important",
    alignItems: "center",
    justifyContent: "center",
  },
  CountryBtnPos: {
    top: "10px",
    left: "-10px",
    width: "20%",
    margin: "0 80% 27% 0 !important",
  },
  CountryImg2: {
    width: "80%",
    padding: "30px",
    marginLeft: "55px",
  },
  DisBtn: {
    backgroundColor: "#baf3e7",
    color: "black",
  },
  Fname: {
    width: "44% !important",
    marginRight: "7% !important",
    bottom: "12px",
  },
  Lname: {
    width: "44% !important",
    bottom: "12px",
  },
  TxtBottom: {
    marginBottom: "20px !important",
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#02e0b1",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    height: "6vh",
    "&:disabled": {
      backgroundColor: "#baf3e7",
      color: "black",
    },
    "&:hover": {
      backgroundColor: "#0fb490",
    },
  },
}));

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

  const formClasses = useStyles();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ mode: "all" });

  const dispatch = useDispatch();

  const FormSubmitHandler: SubmitHandler<IFormInput> = (data: IFormInput) => {
    history.push("./loading");
    dispatch(mainFormData(data));
  };

  return (
    <div className={formClasses.bgMain}>
      <div className={formClasses.root}>
        <div>
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
                error={!!errors.firstName}
                id="outlined-size-normal"
                label="First Name"
                className={formClasses.Fname}
                {...register("firstName", { required: true })}
                onInput={(evt: any) => {
                  const caps =
                    evt.target.value.charAt(0).toUpperCase() +
                    evt.target.value.slice(1);
                  setValue("firstName", caps);
                }}
                helperText={
                  !!errors.firstName && <p>First Name is Required!</p>
                }
              />
              <TextField
                error={!!errors.lastName}
                id="outlined-size-normal"
                label="Last Name"
                className={formClasses.Lname}
                {...register("lastName", { required: true })}
                onInput={(evt: any) => {
                  const caps =
                    evt.target.value.charAt(0).toUpperCase() +
                    evt.target.value.slice(1);
                  setValue("lastName", caps);
                }}
                helperText={!!errors.lastName && <p>Last Name Is Required!</p>}
              />
            </Box>
            <TextField
              error={!!errors.PhoneNumber}
              fullWidth
              type="number"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              className={formClasses.TxtBottom}
              {...register("PhoneNumber", { required: true })}
              helperText={
                !!errors.PhoneNumber && <p>Phone Number Is Required!</p>
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Button
                      onClick={() => setOpen(true)}
                      className={formClasses.CountryBtnPos}
                    >
                      <img
                        src={country.icon}
                        alt={country.value}
                        className={formClasses.CountryImg}
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
                          <FormControl
                            sx={{ m: 1, minWidth: 230, minHeight: 140 }}
                          >
                            <MenuItem value=""></MenuItem>
                            {Object.keys(countries).map((country, index) => (
                              <Button
                                key={index}
                                className={formClasses.CountryBtn}
                                onClick={() => FlagsChanger(countries[country])}
                              >
                                <img
                                  src={countries[country].icon}
                                  alt={countries[country].value}
                                  className={formClasses.CountryImg2}
                                />
                                {countries[country].value}
                              </Button>
                            ))}
                          </FormControl>
                        </Box>
                      </DialogContent>
                    </Dialog>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              error={!!errors.email}
              fullWidth
              label="Email"
              className={formClasses.TxtBottom}
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              helperText={!!errors.email && <p>Invalid Email!</p>}
            />
            <TextField
              error={!!errors.password}
              fullWidth
              type="password"
              label="Password"
              id="filled-adornment-password"
              className={formClasses.TxtBottom}
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)+$/,
              })}
              helperText={
                !!errors.password && (
                  <p>
                    Oops! You need a password longer than 8 characters with
                    numbers and letters.
                  </p>
                )
              }
            />
            <input
              type="submit"
              value="N E X T"
              defaultValue="Next"
              className={formClasses.submitBtn}
              disabled={!isValid}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
