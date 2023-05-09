import React, { useState } from "react";
// import CustomButton from "./UI/button/CustomButton";
import CustomSelect from "./UI/select/CustomSelect";
import DateTimePicker from "./UI/dataPicker/DataTimePicker";
export const BookingForm = () => {
  const [tower, setTower] = useState("A");
  const [floor, setFloor] = useState("3");
  const [room, setRoom] = useState("1");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [comment, setComment] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleTowerChange = (selectedOption) => {
    setTower(selectedOption.value);
  };
  const handleFloorChange = (selectedOption) => {
    setFloor(selectedOption.value);
  };
  const handleRoomChange = (selectedOption) => {
    setRoom(selectedOption.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleStartTimeChange = (selectedOption) => {
    setStartTime(selectedOption.value);
  };
  const handleEndTimeChange = (selectedOption) => {
    setEndTime(selectedOption.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      tower,
      floor,
      room,
      date,
      startTime,
      endTime,
      comment,
    };
    console.log(JSON.stringify(formData));
  };

  const handleReset = () => {
    setTower("A");
    setFloor("3");
    setRoom("1");
    setDate(new Date().toISOString().split("T")[0]);

    setComment("");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__title">
        Форма бронирования переговорной комнаты
      </div>

      <div className="booking-form__select-tower select">
        <CustomSelect
          isRequired={true}
          onChange={handleTowerChange}
          options={[
            { value: "A", label: "Башня А" },
            { value: "B", label: "Башня Б" },
          ]}
          placeholder="Выберите башню"
        />
      </div>
      <div className="booking-form__select-floor select">
        <CustomSelect
          onChange={handleFloorChange}
          options={Array.from({ length: 25 }, (_, i) => ({
            value: i + 3,
            label: `Этаж ${i + 3}`,
          }))}
          placeholder="Выберите этаж"
        />
      </div>
      <div className="booking-form__select-room select">
        <CustomSelect
          onChange={handleRoomChange}
          options={Array.from({ length: 10 }, (_, i) => ({
            value: i + 1,
            label: `Комната ${i + 1}`,
          }))}
          placeholder="Выберите комнату"
        />
      </div>
      <div className="booking-form__date date">
        <div className="date__title">Выберите дату</div>
        <input
          id="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          required
          min={new Date().toISOString().split("T")[0]}
        />
        <div className="date__title">Время встречи</div>

        <CustomSelect
          onChange={handleStartTimeChange}
          options={Array.from({ length: 15 }, (_, i) => ({
            value: `${i + 8}:00`,
            label: `${i + 8}:00`,
          }))}
          placeholder="Выберите комнату"
        />
        <div>до</div>
        <CustomSelect
          onChange={handleEndTimeChange}
          options={Array.from({ length: 15 }, (_, i) => ({
            value: `${i + 8}:00`,
            label: `${i + 8}:00`,
          }))}
          placeholder="Выберите комнату"
        />
      </div>

      <label className="booking-form__label" htmlFor="comment">
        Комментарии и дополнения:
      </label>
      <textarea
        id="comment"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button className="booking-form__submit btn" type="submit">
        Отправить
      </button>
      <button
        className="booking-form__reset   btn"
        type="button"
        onClick={handleReset}
      >
        Отчистить
      </button>
    </form>
  );
};
