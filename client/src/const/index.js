export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const REGISTER_URL = "/register";
export const LOGIN_URL = "/login";

export const DUMMY_USER = {
  name: "Vedran",
  email: "sustic_vedran@yahoo.com",
  password: "123",
  todoLists: [
    {
      todoTitle: "ragu shopping",
      todoItems: [
        {
          todoTitle: "50g panceta",
          completed: false,
        },
        {
          todoTitle: "thyme",
          completed: false,
        },
        {
          todoTitle: "extra-virgin olive oil",
          completed: true,
        },
        {
          todoTitle: "Pecorino cheese",
          completed: false,
        },
        {
          todoTitle: "yellow onions",
          completed: false,
        },
        {
          todoTitle: "tomatoes",
          completed: true,
        },
        {
          todoTitle: "black pepers",
          completed: false,
        },
      ],
    },
    {
      todoTitle: "Buy Drawing Supply",
      todoItems: [
        {
          todoTitle: "Paper A4 50sheets",
          completed: true,
        },
        {
          todoTitle: "Drawing pencils",
          completed: false,
        },
      ],
    },
  ],
};
