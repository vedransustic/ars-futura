import React from "react";
import { Trash } from "../../Icons";
import "./index.css";

const ListItem = ({ item, deleteListItem }) => {
  return (
    <div className="list-item">
      <h2 className="list-title">{item.todoTitle}</h2>
      <button onClick={deleteListItem}>
        <Trash />
      </button>
    </div>
  );
};

export default ListItem;
