import React from "react";
import CreatableSelect from "react-select/creatable";

const customStyles = {
  control: (base) => ({ ...base, borderColor: "#d1d5db", borderWidth: "2px" }),
  multiValueRemove: (base) => ({
    ...base,
    color: "#2563eb",
    ":hover": { backgroundColor: "#e5e7eb" },
  }),
};

const CustomSelect = ({
  options,
  selectedOptions,
  handleChange,
  handleCreate,
}) => {
  return (
    <CreatableSelect
      options={options}
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      onCreateOption={handleCreate}
      styles={customStyles}
      placeholder='Select or create chart types...'
    />
  );
};

export default CustomSelect;
