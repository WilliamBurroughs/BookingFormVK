import React, { useState } from "react";
// import CustomButton from "./UI/button/CustomButton";
import CustomSelect from "./UI/select/CustomSelect";

export const BookingForm = () => {
  const optionsTime = Array.from({ length: 15 }, (_, i) => ({
    value: `${i + 8}:00`,
    label: `${i + 8}:00`,
  }));

  const optionsTower = [
    { value: "Башня A", label: "Башня А" },
    { value: "Башня Б", label: "Башня Б" },
  ];

  const optionsFloor = Array.from({ length: 25 }, (_, i) => ({
    value: `Этаж ${i + 3}`,
    label: `Этаж ${i + 3}`,
  }));
  const optionsRoom = Array.from({ length: 10 }, (_, i) => ({
    value: `Комната ${i + 1}`,
    label: `Комната ${i + 1}`,
  }));

  const [tower, setTower] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [comment, setComment] = useState("");
  const [startTime, setStartTime] = useState(optionsTime[0].value);
  const [endTime, setEndTime] = useState(optionsTime[1].value);

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
    setTower(null);
    setFloor(null);
    setRoom(null);
    setDate(new Date().toISOString().split("T")[0]);
    setStartTime(optionsTime[0].value);
    setEndTime(optionsTime[1].value);
    setComment("");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__title">
        Форма бронирования переговорной комнаты
      </div>

      <div className="booking-form__select-tower select">
        <label>Выбор башни</label>
        <CustomSelect
          isRequired={true}
          value={{ value: tower, label: tower }}
          onChange={handleTowerChange}
          options={optionsTower.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          placeholder="Выберите башню"
        />
      </div>
      <div className="booking-form__select-floor select">
        <label>Выбор этажа</label>
        <CustomSelect
          isRequired={true}
          value={{ value: floor, label: floor }}
          onChange={handleFloorChange}
          options={optionsFloor.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          placeholder="Выберите этаж"
        />
      </div>
      <div className="booking-form__select-room select">
        <label>Выбор комнаты</label>
        <CustomSelect
          isRequired={true}
          value={{ value: room, label: room }}
          onChange={handleRoomChange}
          options={optionsRoom.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          placeholder="Выберите комнату"
        />
      </div>
      <div className="booking-form__date date">
        <label>Дата встречи</label>
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
          value={{ value: startTime, label: startTime }}
          options={optionsTime.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          placeholder="Выберите время начала встречи"
        />
        <div>до</div>
        <CustomSelect
          onChange={handleEndTimeChange}
          value={{ value: endTime, label: endTime }}
          options={optionsTime.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          placeholder="Выберите время конца встречи"
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
        Сбросить
      </button>
    </form>
  );
};
