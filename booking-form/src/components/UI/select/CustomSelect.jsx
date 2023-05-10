import React from "react";
import Select from "react-select";

const CustomSelect = ({ options, isRequired, ...props }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      borderBottom: "1px solid black",
      boxShadow: "none",
      borderRadius: "0",
      "&:hover": {
        borderBottom: "1px solid #ccc",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f2f2f2" : "white",
      color: state.isSelected ? "black" : "inherit",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f2f2f2",
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "black",
    }),
  };

  return (
    <Select
      {...props}
      options={options}
      styles={customStyles}
      required={isRequired}
    />
  );
};

export default CustomSelect;
