import React from "react";
import "./index.css";
import { Button, Footer, ListItem, Navbar, Title } from "../../components";
import { DUMMY_USER } from "../../const";

const Home = () => {
  const deleteListItem = (title) => {
    console.log(title);
  };

  return (
    <div className="home">
      <Navbar user={DUMMY_USER.name} />
      <div className="title-button">
        <Title text={"User Lists"} />
        <Button text={"Create New List"} />
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

export default Home;