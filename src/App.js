import "./App.css";
import { Routes, Route } from "react-router-dom";
import Tasks from "../src/Components/CompleteTasks/Tasks";
import Navbar from "./Components/Navbar/Navbar";
import Calendar from "./Components/Calendar/DatePicker";
import ToDo from "./Components/ToDo/ToDo";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="">
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </section>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
