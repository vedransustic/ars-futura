import React from "react";
import { Checked, Unchecked } from "../../Icons";
import "./index.css";
import { useDispatch } from "react-redux";
import { changeItemCompleted } from "../../redux/actions/userActions";
import axios from "../../api/axios";
import { CHANGE_COMPLETED_URL } from "../../const";

const TodoItem = ({ username, lid, item }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const result = await axios.post(
        CHANGE_COMPLETED_URL,
        JSON.stringify({
          username: username,
          iid: item.iid,
          completed: item.completed,
        }),
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
    <div className="todo-item" onClick={handleClick}>
      {item.completed ? <Checked /> : <Unchecked />}
      <h2>{item.title}</h2>
    </div>
  );
};

export default TodoItem;
