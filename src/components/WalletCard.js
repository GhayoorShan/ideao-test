import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Button,
  Avatar,
  IconButton,
  Menu,
  Typography,
  Grid,
} from "@mui/material";
import metaAvatar from "../assets/meta.svg";
import metaAvatar2 from "../assets/meta2.svg";

const WalletCard = () => {
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      alert("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);

  return (
    <>
      {defaultAccount ? (
        <Grid background="transparent" p={0}>
          <IconButton onClick={handleOpenUserMenu}>
            <Typography color="white" pr={2}>
              Account 1
            </Typography>
            <Avatar src={metaAvatar} />
          </IconButton>

          <Menu
            sx={{ mt: "45px" }}
            p={0}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Grid sx={{ height: 400 }} p={2}>
              <Avatar src={metaAvatar2} aria-label="recipe" />
              <Typography fontWeight={700} mt={3}>
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {defaultAccount}
              </Typography>
              <Typography fontWeight={700} mt={3}>
                Balance
              </Typography>
              <Typography color="text.secondary">{userBalance}</Typography>
            </Grid>
          </Menu>
        </Grid>
      ) : (
        <Button
          color="neutral"
          sx={{
            color: "#57EBDE",
            borderRadius: "0",
          }}
          variant="outlined"
          onClick={connectWalletHandler}
        >
          Connect Metamask
        </Button>
      )}
    </>
  );
};

export default WalletCard;
