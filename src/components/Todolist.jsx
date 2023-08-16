import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todolist.css";
import List from "./List";

const Todolist = () => {
  return (
    <div className="container box">
      <div className="row">
        <div className="col">
          <h2> To Do List </h2>
        </div>
      </div>
      <List />
    </div>
  );
};

export default Todolist;
