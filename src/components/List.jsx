import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todolist.css";

const List = () => {
  let [v, setv] = useState("");
  const [arr, setArr] = useState([]);

  const update = (event) => {
    setv(event.target.value);
  };

  const updateList = () => {
    const temp = v;
    setv("");
    if (temp === "") return;
    else
      setArr((pre) => {
        return [...pre, temp];
      });
  };

  const cancelUpdate = (index) => {
    console.log(index);
    setArr((pre) => {
      let newArr = [...pre];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  return (
    <>
      <div className="row">
        <div className="col p-2 mx-3">
          <input
            type="text"
            value={v}
            placeholder="Enter Item Name 🛒"
            onChange={update}
          />
          <button
            className="btn btn-primary mx-2 btn1 fw-bolder fs-3"
            onClick={updateList}
          >
            +
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <br />
          <ul className="list-unstyled">
            {arr.map((val, index) => {
              return (
                <li>
                  {val}
                  <button
                    className="btn btn-danger btn2"
                    key={index}
                    id={index}
                    onClick={cancelUpdate}
                  >
                    ❎
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
