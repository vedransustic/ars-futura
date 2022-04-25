import React, { useState } from "react";
import "./index.css";
import { Footer, Button, Title, TodoItem, Navbar } from "../../components";
import { Pencil, Plus } from "../../Icons";
import { DUMMY_USER } from "../../const";

const TodoList = () => {
  const [listTitle, setListTitle] = useState("ragu shopping");
  const data = DUMMY_USER.todoLists[0].todoItems;

  return (
    <>
      <Navbar user={"Vedran"} />
      <div className="content">
        <div className="top">
          <div className="title-container">
            <Title text={listTitle} />
            <button>
              <Pencil /> <span>Edit</span>
            </button>
          </div>
          <Button text="New List" />
        </div>
        <div className="middle">
          <span className="plus">
            <Plus />
          </span>
          <input type="text" placeholder="Add a to-do..." />
        </div>
        <div className="bottom">
          {data.map((todo, idx) => (
            <TodoItem idx={idx} item={todo} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TodoList;
