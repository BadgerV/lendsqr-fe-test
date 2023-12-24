/* eslint-disable @typescript-eslint/no-explicit-any */

// custom styles for select dropdown
export const dropDownCustomStyles = {
  input: (provided: any) => ({
    ...provided,
    fontFamily: "Work Sans, sans-serif",
    fontSize: "0.8rem",
    height: "0.2rem",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontFamily: "Work Sans, sans-serif",
    fontSize: "0.8rem",
  }),
  control: (provided: any, state: { isFocused: boolean }) => ({
    ...provided,
    background: "transparent",
    borderRadius: "8px",
    fontSize: "0.7rem",
    "&:hover": { borderColor: state.isFocused ? "none" : "none" },
    width: "12rem",
    border: "1px solid #545f7d26",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (provided: any, state: { isFocused: boolean }) => ({
    ...provided,
    color: "#213F7D",
    transform: state.isFocused ? "rotate(180deg)" : null,
    transition: "transform 0.2s ease-in-out",
    scale: "0.8",
  }),
  option: (provided: any, state: { isSelected: boolean }) => ({
    ...provided,
    color: state.isSelected ? "#000" : "#000",
    fontFamily: "Work Sans, sans-serif",
    fontSize: "0.8rem",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#545F7D",
    fontFamily: "Work Sans, sans-serif",
    fontSize: "0.7rem",
    padding : "0.4rem",
    fontWeight: "300",
  }),
};
