import "./App.css";
import TodoList from "./pages/TodoList";
import Navbar from "./components/Navbar";
import { Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar user={"Vedran"} />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
