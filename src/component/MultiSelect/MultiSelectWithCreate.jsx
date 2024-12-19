import React, { useState, useEffect, useCallback } from "react";
import CustomSelect from "./CustomSelect";
import SelectedItemsList from "./SelectedItemsList";

const MultiSelectWithCreate = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allOptions, setAllOptions] = useState(options);

  const handleChange = (selected) => setSelectedOptions(selected || []);

  const handleCreate = (inputValue) => {
    const newOption = {
      value: inputValue?.toLowerCase().replace(/\s+/g, "-"),
      label: inputValue,
    };
    setAllOptions((prevOptions) => [...prevOptions, newOption]);
    setSelectedOptions((prevSelected) => [...prevSelected, newOption]);
  };

  const handleSelectAll = useCallback(
    (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "a") {
        e.preventDefault();
        setSelectedOptions(allOptions);
      }
    },
    [allOptions]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleSelectAll);
    return () => document.removeEventListener("keydown", handleSelectAll);
  }, [handleSelectAll]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <div className='bg-white shadow-md rounded-lg p-6 w-full max-w-md'>
        <label className='block text-lg font-semibold mb-4 text-gray-700'>
          Select Chart Type
        </label>
        <CustomSelect
          options={allOptions}
          selectedOptions={selectedOptions}
          handleChange={handleChange}
          handleCreate={handleCreate}
          placeholder='Select or create chart types...'
        />
        <SelectedItemsList selectedOptions={selectedOptions} />
      </div>
    </div>
  );
};

export default MultiSelectWithCreate;
