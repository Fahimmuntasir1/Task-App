import "./App.css";
import { Routes, Route } from "react-router-dom";
import Tasks from "../src/Components/CompleteTasks/Tasks";
import Navbar from "./Components/Navbar/Navbar";
import Calendar from "./Components/Calendar/Calendar";
import ToDo from "./Components/ToDo/ToDo";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTask />
      <section className="">
        <ToDo />
        <Routes>
          <Route path="/task" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
