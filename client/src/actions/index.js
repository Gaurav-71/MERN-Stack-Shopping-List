import axios from "axios";

const url = "http://localhost:8080/api/items";

export const getItems = () => (dispatch) => {
  console.log("get called");
  axios
    .get(url)
    .then((res) => dispatch({ type: "getItems", payload: res.data }))
    .catch((error) => {
      console.log("get error : ", error); //Logs a string: Error: Request failed with status code 404
    });
};

export const addItem = (item) => (dispatch) => {
  axios
    .post(url, item)
    .then((res) => dispatch({ type: "addItem", payload: res.data }))
    .catch((error) => {
      console.log("add error : ", error); //Logs a string: Error: Request failed with status code 404
    });
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(url + "/" + id)
    .then((res) => {
      dispatch({ type: "deleteItem", payload: id });
    })
    .catch((error) => {
      console.log("delete error : ", error); //Logs a string: Error: Request failed with status code 404
    });
};

export const setLoading = () => {
  return {
    type: "setLoading",
  };
};
