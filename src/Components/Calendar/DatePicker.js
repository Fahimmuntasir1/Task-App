import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePicker = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="flex justify-center my-5">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default DatePicker;
