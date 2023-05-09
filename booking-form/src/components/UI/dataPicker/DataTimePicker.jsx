import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import CustomSelect from "../select/CustomSelect";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const endRef = useRef(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleStartTimeChange = (selectedOption) => {
    setStartTime(selectedOption);
    const startDateTime = new Date(`${startDate} ${selectedOption.value}`);
    const endDateTime = new Date(`${startDate} ${endTime?.value}`);
    if (endDateTime <= startDateTime) {
      endRef.current.setCustomValidity("Выберите время позже начала встречи");
    } else {
      endRef.current.setCustomValidity("");
    }
  };

  const handleEndTimeChange = (selectedOption) => {
    setEndTime(selectedOption);
    const startDateTime = new Date(`${startDate} ${startTime?.value}`);
    const endDateTime = new Date(`${startDate} ${selectedOption.value}`);
    if (endDateTime <= startDateTime) {
      endRef.current.setCustomValidity("Выберите время позже начала встречи");
    } else {
      endRef.current.setCustomValidity("");
    }
  };

  return (
    <div>
      <div>
        <label>Select a date:</label>
        <br />
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          placeholderText="Назначить дату встречи"
        />
      </div>
      <div>
        <CustomSelect
          placeholder="Начало встречи"
          options={Array.from({ length: 13 }, (_, i) => ({
            value: `${i + 8}:00`,
            label: `${i + 8}:00`,
          }))}
          onChange={handleStartTimeChange}
          value={startTime}
        />
        <CustomSelect
          placeholder="Конец встречи"
          options={Array.from({ length: 13 }, (_, i) => ({
            value: `${i + 8}:00`,
            label: `${i + 8}:00`,
          }))}
          value={endTime}
          onChange={handleEndTimeChange}
          required={startTime?.value !== "" && endTime?.value === ""}
          ref={endRef}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
