import React, { useState } from "react";
import { Form, Input } from "reactstrap";

import { useDispatch } from "react-redux";
import { addItem } from "../actions";

const ItemModal = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    console.log("fired");
    e.preventDefault();
    console.log(e.target);
    e.target.item.value = "";
    const newItem = {
      name: name,
    };
    dispatch(addItem(newItem));
  };
  return (
    <div>
      <Form style={{ margin: "2rem" }} onSubmit={onSubmit}>
        <Input
          type="text"
          value={name}
          id="item"
          placeholder="Add shopping item"
          onChange={(e) => setName(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default ItemModal;
