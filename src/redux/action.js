import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USERS,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        let nr = new Array();
        for (let r of res.data) {
          nr.push({
            id: r.id + "",
            fullName: r.fullName + "",
            company: r.company + "",
            email: r.email + "",
            website: r.website + "",
            imageSrc: r.imageSrc + "",
          });
        }
        dispatch(getUsers(nr));
      })
      // eslint-disable-next-line no-unused-expressions
      .catch((error) => console.log(error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      // eslint-disable-next-line no-unused-expressions
      .catch((error) => console.log(error));
  };
};

export const addUser = (user) => {
  axios
    .get(`${process.env.REACT_APP_API}`)
    .then((res) => {
      res.data = res.data.sort();
      console.log("res is " + res.data[res.data.length - 1].id.id);
      user["id"] = parseInt(res.data[res.data.length - 1].id.id) + 1;

      axios
        .post(`${process.env.REACT_APP_API}/`, user)
        .then((res) => {
          console.log("Response", res);
          // dispatch(userAdded());
          //dispatch(loadUsers());
        })
        // eslint-disable-next-line no-unused-expressions
        .catch((error) => console.log(error));
    })
    .catch((err) => {
      console.log("err " + err);
    });
};

// export const loadUsers = () => async (dispatch) => {
//   try {
//     const data = await axios.get(`${process.env.REACT_APP_API}`).then((res) => {
//       dispatch(getUsers(res.data));
//     });
//     return data;
//   } catch {
//     // eslint-disable-next-line no-unused-expressions
//     (error) => console.log(error);
//   }
// };
