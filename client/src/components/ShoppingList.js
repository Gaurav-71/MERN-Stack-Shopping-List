import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import { getItems, deleteItem, loading } from "../actions";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const itemReducerData = useSelector((state) => state.itemReducer);
  dispatch(getItems());
  let items = itemReducerData.items;
  let loading = itemReducerData.loading;

  const deleteItemMethod = (id) => {
    console.log("fired");
    dispatch(deleteItem(id));
  };
  return (
    <Container>
      {loading ? (
        "loading"
      ) : (
        <ul>
          {items.map(({ _id, name }) => (
            <li style={{ marginBottom: "1rem" }} key={_id}>
              <Button
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  deleteItemMethod(_id);
                }}
                color="danger"
              >
                x
              </Button>
              {name}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ShoppingList;
