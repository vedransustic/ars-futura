import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { APP_LISTS_URL } from "../../const/routes";

const ListItem = ({ item, deleteListItem }) => {
  return (
    <div className="list-item">
      <Link to={APP_LISTS_URL + `/${item.lid}`}>
        <h2 className="list-title">{item.todoTitle}</h2>
      </Link>
      <button onClick={() => deleteListItem(item.lid)}>
        <FontAwesomeIcon icon={faTrash} size={"3x"} color={"red"} />
      </button>
    </div>
  );
};

export default ListItem;
