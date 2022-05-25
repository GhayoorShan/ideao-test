import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import design from "../design.svg";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <Grid
        container
        sx={{
          py: 5,
          px: 10,
          //   maxWidth: "lg",
          display: "flex",
          margin: "auto",
          maxHeight: "1024px",
          background: "#242424",
          color: "rgb(255, 255, 255)",
        }}
      >
        <Grid align="right" sm={12} item>
          <Button
            color="neutral"
            sx={{
              color: "#57EBDE",
              borderColor: "#57EBDE",
              borderRadius: "0",
            }}
            variant="outlined"
          >
            Connect Metamask
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form />
        </Grid>
        <Grid
          height="auto"
          item
          xs={12}
          sm={6}
          sx={{
            position: "relative",
            backgroundImage: `url(${design})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "",
          }}
        >
          {/* <Box
            component="img"
            backgroundImage={logo}
            height="100px"
            // src={logo}
            // sx={{
            //   position: "absolute",
            //   bottom: "-150px",
            //   right: "-130px",
            // }}
          ></Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
