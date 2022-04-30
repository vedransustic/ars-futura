import React, { useState } from "react";
import "./index.css";
import { Button, Title, TodoItem } from "../../components";
import { Pencil, Plus } from "../../Icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import { ADD_TODO_ITEM_URL, RENAME_LIST_URL } from "../../const";
import { addTodoItem, changeListTitle } from "../../redux/actions/userActions";

const TodoList = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();

  const id = useSelector((state) => state.allReducers.user.id);
  const username = useSelector((state) => state.allReducers.user.username);
  const lists = useSelector((state) => state.allReducers.user.todoLists);
  const listItemIndex = lists.findIndex((item) => item.lid === listId);
  const displayData = lists[listItemIndex];

  const [title, setTitle] = useState(displayData?.todoTitle);
  const [edit, setEdit] = useState(false);

  const [newTodo, setNewTodo] = useState("");

  const handleEdit = () => {
    setEdit(true);
  };

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const submitEdit = async () => {
    try {
      const response = await axios.post(
        RENAME_LIST_URL,
        JSON.stringify({
          id,
          lid: displayData.lid,
          newTitle: title,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        dispatch(changeListTitle(displayData.lid, title));
      }
      setEdit(false);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleInputTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const submitNewTodo = async () => {
    try {
      const response = await axios.post(
        ADD_TODO_ITEM_URL,
        JSON.stringify({
          id: id,
          lid: displayData.lid,
          title: newTodo,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        dispatch(addTodoItem(displayData.lid, response.data.id, newTodo));
        setNewTodo("");
      }
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="top">
          <div className="title-container">
            {edit ? (
              <input type="text" onChange={handleInput} />
            ) : (
              <Title text={title} />
            )}
            <button onClick={edit ? submitEdit : handleEdit}>
              <Pencil /> <span>Edit</span>
            </button>
          </div>
          <Link to={"/lists"}>
            <Button text={"Back to List"} />
          </Link>
        </div>
        <div className="middle">
          <span className="plus" onClick={submitNewTodo}>
            <Plus />
          </span>
          <input
            type="text"
            placeholder="Add a to-do..."
            onChange={handleInputTodo}
          />
        </div>
        <div className="bottom">
          {displayData?.todoItems.map((todo, idx) => (
            <TodoItem
              key={idx}
              lid={displayData.lid}
              username={username}
              item={todo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
