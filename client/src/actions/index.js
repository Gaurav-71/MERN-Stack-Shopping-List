import axios from "axios";

const url = "/api/items";

export const getItems = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(url)
    .then((res) => dispatch({ type: "getItems", payload: res.data }));
};

export const addItem = (item) => (dispatch) => {
  axios
    .post(url, item)
    .then((res) => dispatch({ type: "addItem", payload: res.data }));
};

export const deleteItem = (id) => (dispatch) => {
  axios.delete(url + "/" + id).then((res) => {
    dispatch({ type: "deleteItem", payload: id });
  });
};

export const setLoading = () => {
  return {
    type: "setLoading",
  };
};
