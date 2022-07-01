import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import { toast } from "react-toastify";

const ToDo = () => {
  const [todoData, setTodoData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTodoData(data));
  }, []);

  /*  ------------ Update Button Click In modal show ----------------------- */
  const modal = (UpdateId) => {
    setId(UpdateId);
  };
  /*------------------- Task Value is Update --------------- */
  const Update = (e) => {
    e.preventDefault();
    const updateTodo = e.target.text.value;

    if (id) {
      fetch(`http://localhost:5000/upToDo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updateTodo }),
      })
        .then((res) => res.json())
        .then((data) => {
          e.target.value = "";
          toast.success("Update Value ");
        });
    }
  };

  /*  =================== Click in the Checkbox ====================  */
  const Checkbox = (CheckID) => {
    fetch(`http://localhost:5000/Checkbox/${CheckID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Update Checkbox!");
      });
  };

  return (
    <div className=" bg-slate-200 overflow-auto text-center">
      <AddTask />
      <div>
        <h2>To Do</h2>
        <table className="text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo List</th>
              <th>Update</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((dt, index) => (
              <tr key={dt._id}>
                <td>{index + 1}</td>
                <td className="w-[60%]">{dt.data}</td>
                <td>
                  <button onClick={() => modal(dt._id, dt.data)}>
                    <label
                      for="my-modal-6"
                      className="btn btn-outline rounded btn-primary"
                    >
                      Edit
                    </label>
                  </button>
                </td>
                <th>
                  <label>
                    <input
                    className="checkbox checkbox-primary"
                      onClick={() => Checkbox(dt._id)}
                      type="checkbox"
                      class="checkbox"
                      checked={dt.Checkbox && "checked"}
                      disabled={dt?.Checkbox && "disabled"}
                    />
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        {/*-- modal for edit task  --*/}

        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box relative">
            <label
              for="my-modal-6"
              class="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={Update} className="text-center">
              <input
                type="text"
                placeholder="Update Value "
                class="input input-bordered input-accent w-full max-w-xs my-5"
                name="text"
                required
              />
              <h1 className="text-center">
                <button class="btn " type="submit">
                  Submit
                </button>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
