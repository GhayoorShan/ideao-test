import React from "react";
import { Grid, TextField, Typography, Button, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageCropper from "./ImageCropper";

const Form = () => {
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
        <form>
          <FormLabel sx={{ color: "#FFF" }}>Full Name</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="fullName"
            name="fullName"
            placeholder="Your full name here"
          />

          <FormLabel sx={{ color: "#FFF" }}>Email Address</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="email"
            name="email"
            placeholder="Your email address here"
          />

          <FormLabel sx={{ color: "#FFF" }}>Company</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="company"
            name="company"
            placeholder="Your company"
          />

          <FormLabel sx={{ color: "#FFF" }}>Comapny Website</FormLabel>
          <CssTextField
            sx={{ mb: 2 }}
            fullWidth
            id="website"
            name="website"
            placeholder="Your company website url"
          />

          <ImageCropper />

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
          {/* <button onSubmit={handleOnSubmit}>Submit</button> */}
        </form>
      </Grid>
    </>
  );
};

export default Form;
