import React from "react";
import { Trash } from "../../Icons";
import "./index.css";
import { Link } from "react-router-dom";

const ListItem = ({ item, deleteListItem }) => {
  return (
    <div className="list-item">
      <Link to={`/lists/${item.lid}`}>
        <h2 className="list-title">{item.todoTitle}</h2>
      </Link>
      <button onClick={() => deleteListItem(item.lid)}>
        <Trash />
      </button>
    </div>
  );
};

export default ListItem;
