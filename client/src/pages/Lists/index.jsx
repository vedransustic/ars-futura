import React from "react";
import "./index.css";
import { Button, ListItem, Title } from "../../components";
import axios from "../../api/axios";
import { CREATE_LIST_URL, DEFAULT_TITLE, DELETE_LIST_URL } from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { addNewList, deleteList } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const Lists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.allReducers.user.id);
  const todoLists = useSelector((state) => state.allReducers.user.todoLists);

  const handleNewList = async () => {
    try {
      const response = await axios.post(
        CREATE_LIST_URL,
        JSON.stringify({ id: id, todoTitle: DEFAULT_TITLE }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        dispatch(addNewList(response.data.id, DEFAULT_TITLE));
      }
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const deleteListItem = async (lid) => {
    try {
      const response = await axios.post(
        DELETE_LIST_URL,
        JSON.stringify({ id: id, lid: lid }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        dispatch(deleteList(lid));
      }
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <div className="home">
      <div className="title-button">
        <Title text={"User Lists"} />
        <Button text={"New List"} onClick={() => handleNewList()} />
      </div>
      <div className="user-lists">
        {todoLists.map((list) => (
          <ListItem
            key={list.lid}
            item={list}
            deleteListItem={deleteListItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Lists;
