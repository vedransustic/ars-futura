import "./App.css";
import { Routes, Route } from "react-router-dom";
import Lists from "./pages/Lists";
import Login from "./pages/Login";
import Layout from "./containers/Layout";
import Register from "./pages/Register";
import Error from "./pages/Error";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="list" element={<Lists />}>
            <Route path=":listId" element={<TodoList />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
