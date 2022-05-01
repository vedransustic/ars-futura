import React from "react";
import "./index.css";
import { Button, ListItem, Title } from "../../components";
import axios from "../../api/axios";
import { DEFAULT_TITLE, HOME_TITLE, NEW_LIST_BUTTON } from "../../const";
import { DELETE_LIST_URL, CREATE_LIST_URL } from "../../const/routes";
import { useDispatch, useSelector } from "react-redux";
import { addNewList, deleteList } from "../../redux/actions/userActions";

const Home = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.allReducers.user.id);
  const todoLists = useSelector((state) => state.allReducers.user.todoLists);

  const handleNewList = async () => {
    try {
      await axios
        .post(
          CREATE_LIST_URL,
          JSON.stringify({ id: id, todoTitle: DEFAULT_TITLE }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            dispatch(addNewList(response.data.id, DEFAULT_TITLE));
          }
        });
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const handleDeleteListItem = async (lid) => {
    try {
      await axios
        .delete(DELETE_LIST_URL, {
          data: {
            id: id,
            lid: lid,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            dispatch(deleteList(lid));
          }
        });
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  return (
    <div className="home">
      <div className="title-button">
        <Title text={HOME_TITLE} />
        <Button text={NEW_LIST_BUTTON} onClick={() => handleNewList()} />
      </div>
      <div className="user-lists">
        {todoLists.map((list) => (
          <ListItem
            key={list.lid}
            item={list}
            deleteListItem={handleDeleteListItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
