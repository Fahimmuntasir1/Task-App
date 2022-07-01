import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import { toast } from "react-toastify";

const ToDo = () => {
  const [todoData, setTodoData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("https://hydro-whistler-11519.herokuapp.com/tasks")
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
      fetch(`https://hydro-whistler-11519.herokuapp.com/upToDo/${id}`, {
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
    fetch(`https://hydro-whistler-11519.herokuapp.com/Checkbox/${CheckID}`, {
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
    <div className="overflow-auto text-center">
      <AddTask />
      <div>
        <h2 className="text-2xl font-bold">ToDos</h2>
        <table className="w-10/12 m-auto table-compact">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tasks</th>
              <th>Update</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((taskData, index) => (
              <tr key={taskData._id}>
                <td>{index + 1}</td>
                <td className="w-[60%]">{taskData.data}</td>
                <td>
                  <button onClick={() => modal(taskData._id, taskData.data)}>
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
                      onClick={() => Checkbox(taskData._id)}
                      type="checkbox"
                      class="checkbox"
                      checked={taskData.Checkbox && "checked"}
                      disabled={taskData?.Checkbox && "disabled"}
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
