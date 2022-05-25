import React from "react";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Button,
  InputLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const Form = () => {
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
          <FormLabel sx={{ color: "#FFFFFF" }}>Full Name</FormLabel>
          <TextField
            size="small"
            fullWidth
            sx={{ mb: 2, color: "#fff" }}
            id="fullName"
            name="fullName"
            placeholder="Your full name here"
          />

          <FormLabel sx={{ color: "#FFFFFF" }}>Email Address</FormLabel>
          <TextField
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            id="email"
            name="email"
            background="#242424"
            placeholder="Your email address here"
          />

          <FormLabel sx={{ color: "#FFFFFF" }}>Company</FormLabel>
          <TextField
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            id="email"
            name="email"
            placeholder="Your company"
          />

          <FormLabel sx={{ color: "#FFFFFF" }}>Comapny Website</FormLabel>
          <TextField
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            id="email"
            name="email"
            placeholder="Your company website url"
          />

          <FormLabel sx={{ color: "#FFFFFF" }}>
            Upload Your Profile Photo
          </FormLabel>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ borderRadius: "0" }}
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
