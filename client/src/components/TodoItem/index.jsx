import React, { useState } from "react";
import { Checked, Unchecked } from "../../Icons";
import "./index.css";

const TodoItem = ({ idx, item }) => {
  const [checked, setChecked] = useState(item.completed);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div key={idx} className="todo-item" onClick={handleClick}>
      {checked ? <Checked /> : <Unchecked />}
      <h2>{item.todoTitle}</h2>
    </div>
  );
};

export default TodoItem;
