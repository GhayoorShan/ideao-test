import React from "react";
import { Grid } from "@mui/material";

import design from "../assets/design.svg";
import Form from "../components/AddUser";
import WalletCard from "../components/WalletCard";

const Home = () => {
  return (
    <div>
      <Grid
        container
        pl={{ xs: 5, md: 10 }}
        sx={{
          pt: 3,
          //   maxWidth: "lg",
          display: "flex",
          margin: "auto",
          // maxHeight: "1024px",
          background: "#242424",
          color: "rgb(255, 255, 255)",
        }}
      >
        <Grid align="right" mr={10} sm={12} item>
          <WalletCard />
        </Grid>
        <Grid item xs={12} sm={5} pb={5}>
          <Form />
        </Grid>
        <Grid
          height="auto"
          item
          xs={12}
          sm={7}
          sx={{
            backgroundImage: `url(${design})`,
            backgroundSize: "120%",
            backgroundPosition: "-30% -110%",
            backgroundRepeat: "no-repeat",
          }}
        ></Grid>
      </Grid>
    </div>
  );
};

export default Home;
