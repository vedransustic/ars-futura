import React, { useState } from "react";
import "./index.scss";
import { Button, Title, TodoItem } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import {
  TODO_ITEM_PLACEHOLDER,
  TODO_LIST_BACK_BUTTON,
  TODO_LIST_SHARE,
} from "../../const";
import {
  ADD_TODO_ITEM_URL,
  APP_LISTS_URL,
  RENAME_LIST_URL,
} from "../../const/routes";
import { addTodoItem, changeListTitle } from "../../redux/actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const { listId } = useParams();
  const dispatch = useDispatch();

  const id = useSelector((state) => state.user.id);
  const username = useSelector((state) => state.user.username);
  const lists = useSelector((state) => state.user.todoLists);
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
      await axios
        .put(RENAME_LIST_URL, {
          id,
          lid: displayData.lid,
          newTitle: title,
        })
        .then((response) => {
          if (response.status === 200) {
            dispatch(changeListTitle(displayData.lid, title));
          }
        });
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
      await axios
        .post(
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
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch(addTodoItem(displayData.lid, response.data.id, newTodo));
          }
        });
      setNewTodo("");
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <div className="content">
      <div className="top-side-page">
        <div className="top">
          <div className="title-container">
            {edit ? (
              <input type="text" value={title} onChange={handleInput} />
            ) : (
              <Title text={title} />
            )}
            <button onClick={edit ? submitEdit : handleEdit}>
              <FontAwesomeIcon icon={faPen} size={"2x"} /> <span>Edit</span>
            </button>
          </div>
          <Link to={APP_LISTS_URL}>
            <Button text={TODO_LIST_BACK_BUTTON} />
          </Link>
        </div>
        <div className="middle">
          <span className="plus" onClick={submitNewTodo}>
            <FontAwesomeIcon icon={faPlusCircle} size={"2x"} />
          </span>
          <input
            type="text"
            placeholder={TODO_ITEM_PLACEHOLDER}
            value={newTodo}
            onChange={handleInputTodo}
          />
        </div>
      </div>
      <div>
        <div className="bottom">
          {displayData?.todoItems.map((todo, idx) => (
            <TodoItem
              key={idx}
              lid={displayData.lid}
              username={username}
              item={todo}
            />
          ))}
          <div className="share-button">
            <Button text={TODO_LIST_SHARE} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
