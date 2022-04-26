import React from "react";
import "./index.css";
import { Button, Footer, ListItem, Navbar, Title } from "../../components";
import { DUMMY_USER } from "../../const";
import { Link } from "react-router-dom";

const Lists = () => {
  const deleteListItem = (title) => {
    console.log(title);
  };

  return (
    <div className="home">
      <Navbar user={DUMMY_USER.name} />
      <div className="title-button">
        <Title text={"User Lists"} />
        <Link to="/login">
          <Button text={"Create New List"} />
        </Link>
      </div>
      <div className="user-lists">
        {DUMMY_USER.todoLists.map((list, idx) => (
          <ListItem
            key={idx}
            item={list}
            deleteListItem={() => deleteListItem(list.todoTitle)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Lists;
