import React from "react";
import AppNav from "./components/NavBar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNav />
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
