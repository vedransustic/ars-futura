import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./Layout";
import Register from "./pages/Register";
import Error from "./pages/Error";
import TodoList from "./pages/TodoList";
import {
  APP_DEFAULT_URL,
  APP_ERROR_URL,
  APP_LISTS_ID_URL,
  APP_LISTS_NEW_LIST_URL,
  APP_LISTS_URL,
  APP_LOGIN_URL,
  APP_REGISTER_URL,
} from "./const/routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={APP_DEFAULT_URL}
          element={<Navigate to={APP_LOGIN_URL} replace />}
        />
        <Route path={APP_LOGIN_URL} element={<Login />} />
        <Route path={APP_REGISTER_URL} element={<Register />} />
        <Route element={<Layout />}>
          <Route path={APP_LISTS_URL} element={<Home />} />
          <Route path={APP_LISTS_ID_URL} element={<TodoList />} />
          <Route path={APP_LISTS_NEW_LIST_URL} element={<TodoList />} />
          <Route path={APP_ERROR_URL} element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
