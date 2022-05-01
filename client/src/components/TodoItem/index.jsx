import React from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { changeItemCompleted } from "../../redux/actions/userActions";
import axios from "../../api/axios";
import { CHANGE_COMPLETED_URL } from "../../const/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare } from "@fortawesome/free-regular-svg-icons";

const TodoItem = ({ username, lid, item }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const result = await axios.put(
        CHANGE_COMPLETED_URL,
        {
          username: username,
          iid: item.iid,
          completed: item.completed,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (result.status === 200) {
        dispatch(changeItemCompleted(lid, item));
      }
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <div className="todo-item">
      {item.completed ? (
        <FontAwesomeIcon
          icon={faCheckSquare}
          size={"2x"}
          onClick={handleClick}
        />
      ) : (
        <FontAwesomeIcon icon={faSquare} size={"2x"} onClick={handleClick} />
      )}
      <h2>{item.title}</h2>
    </div>
  );
};

export default TodoItem;
