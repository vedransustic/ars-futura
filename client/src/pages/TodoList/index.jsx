import React, { useState } from "react";
import "./index.css";
import { NewListButton, TodoItem } from "../../components";
import { Pencil, Plus } from "../../Icons";
import { DUMMY_TODO } from "../../const";

const TodoList = () => {
  const [listTitle, setListTitle] = useState("ragu shopping");

  return (
    <div className="content">
      <div className="top">
        <div className="title-container">
          <h1>{listTitle}</h1>
          <button>
            <Pencil /> <span>Edit</span>
          </button>
        </div>
        <NewListButton />
      </div>
      <div className="middle">
        <span className="plus">
          <Plus />
        </span>
        <input type="text" placeholder="Add a to-do..." />
      </div>
      <div className="bottom">
        {DUMMY_TODO.map((todo, idx) => (
          <TodoItem idx={idx} item={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
