import React from "react";

const AddTask = () => {
  const submit = (e) => {
    if (e.charCode === 13) {
      const Value = e.target.value;
      if (Value) {
        fetch("https://hydro-whistler-11519.herokuapp.com/addTask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: Value }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              e.target.value = "";
            }
          });
      }
      e.preventDefault();
    }
  };
  return (
    <div className="flex justify-center items-center mt-24 mb-16">
      <input
        class="input input-bordered input-lg w-[300px] md:w-[400px] px-auto"
        onKeyPress={(e) => {
          submit(e);
        }}
        type="text"
        placeholder="Enter Your Tasks"
      />
    </div>
  );
};

export default AddTask;
