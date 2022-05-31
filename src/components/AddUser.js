import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, TextField, Typography, Button, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageCropper from "./ImageCropper";

const Form = () => {
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    values[name] = value;
    setValues(values);
  };

  const resetForm = () => {
    setValues({});
  };

  const onPicSet = (o) => {
    values["picture"] = o;
    setValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fullName = values.fullName;
    let email = values.email;
    let company = values.company;
    let website = values.website;
    let imageSrc = values.picture;

    let user = {
      fullName: fullName,
      email: email,
      company: company,
      website: website,
      imageSrc: imageSrc,
    };

    if (!fullName || !email || !company || !website || !imageSrc) {
      alert("Please fill all the input feilds");
    } else {
      axios
        .get(`${process.env.REACT_APP_API}`)
        .then((res) => {
          resetForm();
          if (
            res.data !== undefined &&
            res.data !== null &&
            res.data.length > 0
          ) {
            res.data = res.data.sort();
            user["id"] = parseInt(res.data[res.data.length - 1].id.id) + 1;
          } else {
            user["id"] = 1;
          }
          axios
            .post(`${process.env.REACT_APP_API}/`, user)
            .then((res) => {
              console.log("Response", res);
              navigate("/members");
            })
            // eslint-disable-next-line no-unused-expressions
            .catch((error) => console.log(error));
        })
        .catch((err) => {
          console.log("err " + err);
        });
    }
  };

  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid transparent",
      },

      input: {
        color: "white",
        background: "#2D2D2D",
        height: 12,
        fontSize: 15,
      },
    },
  });
  return (
    <>
      <Grid pb={2} pl={1}>
        <Typography fontSize={55} fontWeight={700}>
          Become A Member
        </Typography>
        <Typography fontSize={25} fontWeight={400}>
          Enter your valid info to get registered
        </Typography>
      </Grid>

      <Grid
        container
        sx={{
          maxWidth: "400px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormLabel sx={{ color: "#FFF" }}>Full Name</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name here"
            onChange={handleInputChange}
          />

          <FormLabel sx={{ color: "#FFF" }}>Email Address</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="email"
            name="email"
            type="email"
            placeholder="Your email address here"
            onChange={handleInputChange}
          />

          <FormLabel sx={{ color: "#FFF" }}>Company</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="company"
            name="company"
            type="text"
            placeholder="Your company"
            onChange={handleInputChange}
          />

          <FormLabel sx={{ color: "#FFF" }}>Comapny Website</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="website"
            name="website"
            type="text"
            placeholder="Your company website url"
            onChange={handleInputChange}
          />

          <ImageCropper onPicSet={onPicSet} />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              borderRadius: "0",
              mt: 4,
              background: "linear-gradient(to right , #AEFB2A, #57EBDE)",
              color: "#000000",
            }}
          >
            Submit
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default Form;
