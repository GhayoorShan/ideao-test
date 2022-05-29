import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  tableCellClasses,
  ButtonGroup,
  TableFooter,
  Pagination,
  Avatar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import design2 from "../assets/design2.svg";
import { deleteUser, loadUsers } from "./../redux/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E8C14C",
    color: theme.palette.common.black,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "21px",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontWeight: 400,
    color: theme.palette.common.white,
    border: 0,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#242424",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#2D2D2D",
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ListMembers = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  // const users = [
  //   {
  //     id: "2",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  //     fullName: "Bilal",
  //     email: "bilal@gmail.com",
  //     company: "MB",
  //     website: "mb.com",
  //   },
  //   {
  //     id: "1",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //     fullName: "Regina",
  //     email: "regina@gmail.com",
  //     company: "HRC",
  //     website: "hrc.com",
  //   },
  //   {
  //     id: "3",
  //     imageSrc:
  //       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  //     fullName: "Azhar",
  //     email: "azhar@gmail.com",
  //     company: "TMC",
  //     website: "tmc.com",
  //   },
  // ];

  return (
    <Grid
      px={{ xs: 3, md: 12 }}
      pt={{ xs: 3, md: 8 }}
      minHeight={1000}
      sx={{
        backgroundImage: `linear-gradient(rgba(20, 20, 20, .5), rgba(20, 20, 20, .5)),url(${design2})`,
        backgroundSize: "60%",
        backgroundPosition: "140% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button
        variant="text"
        py={{ xs: 3, md: 3 }}
        sx={{
          color: "#969696",
          fontSize: 16,
        }}
        onClick={() => navigate("/")}
      >
        <ArrowBackIcon
          sx={{
            pr: "2px",
          }}
        />
        back
      </Button>
      <Grid pt={{ xs: 4, md: 4 }}>
        <Typography fontSize={55} fontWeight={700} color="white">
          Our Members
        </Typography>
      </Grid>
      <Grid container justifyContent="space-between">
        <Typography fontSize={25} fontWeight={400} color="white">
          We’ve thousands of active members
        </Typography>

        <Button
          variant="text"
          sx={{
            color: "#57EBDE",
            fontSize: 25,
            fontWeight: 700,
          }}
          onClick={() => navigate("/")}
        >
          Add New Member
        </Button>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1150, border: "1px solid #e8c14c91" }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">S No.</StyledTableCell>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Email Address</StyledTableCell>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell>Company Website</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {users.length < 1 ? (
            <TableBody>
              <TableRow
                height={300}
                sx={{
                  background: "#2D2D2D",
                }}
              >
                <TableCell align="center" colSpan={8}>
                  <Typography fontSize={25} fontWeight={400} color="#969696">
                    No records to display
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {users.map((users) => (
                <StyledTableRow key={users.id}>
                  <StyledTableCell component="th" scope="users" align="center">
                    {users.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Avatar alt={users.fullName} src={users.imageSrc} />
                  </StyledTableCell>
                  <StyledTableCell>{users.fullName}</StyledTableCell>
                  <StyledTableCell>{users.email}</StyledTableCell>
                  <StyledTableCell>{users.company}</StyledTableCell>
                  <StyledTableCell>{users.website}</StyledTableCell>
                  <StyledTableCell>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button
                        sx={{ color: "#969696" }}
                        onClick={() => navigate(`/`)}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        sx={{ color: "#969696" }}
                        onClick={() => handleDelete(users.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
          <TableFooter>
            <TableRow
              sx={{
                background: "#2D2D2D",
                borderBottom: "2px solid #2D2D2D",
                borderTop: " 2px solid",
              }}
            >
              <TableCell colSpan={8}>
                <ButtonGroup
                  variant="text"
                  aria-label="text button group"
                  sx={{
                    display: "inline-block",
                    float: "right",
                  }}
                >
                  <Button sx={{ color: "#969696", fontSize: "16px" }}>
                    Next
                  </Button>
                  <Button sx={{ color: "#969696", fontSize: "16px" }}>
                    View All{" "}
                    <ArrowForwardIcon
                      sx={{
                        pr: "20px",
                        pl: "10px",
                        fontSize: 22,
                      }}
                    />
                  </Button>
                </ButtonGroup>
                <Pagination
                  hidePrevButton
                  hideNextButton
                  count={6}
                  sx={{
                    display: "inline-block",
                    float: "right",
                  }}
                />
                <Button
                  sx={{
                    display: "inline-block",
                    float: "right",
                    color: "#969696",
                    fontSize: "16px",
                  }}
                >
                  Previous
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ListMembers;
