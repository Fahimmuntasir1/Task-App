import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [TodoData, setTodoData] = useState([]);
  // const [Load, setLoad] = useState(true)

  useEffect(() => {
    fetch("https://hydro-whistler-11519.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTodoData(data);
          // setLoad(false)
        }
      });
  });
  return (
    <div className="overflow-auto">
      <h2>Complete tasks</h2>
      <div>
        {
          /*  Load ? <Loader></Loader> :  */ <div class="overflow-x-auto">
            <table class="table-normal w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Todo List</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {TodoData.map((dt, index) => (
                  <tr key={dt._id}>
                    {dt?.Checkbox && <td>{index + 1}</td>}
                    {dt?.Checkbox && <td className="w-[60%]">{dt.data}</td>}
                    {dt?.Checkbox && (
                      <th>
                        <button className="btn">Delete</button>
                      </th>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  );
};

export default Tasks;
