import React from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
    </div>
  );
};

export default App;
