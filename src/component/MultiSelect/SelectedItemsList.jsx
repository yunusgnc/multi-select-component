import React from "react";

const SelectedItemsList = ({ selectedOptions }) => {
  return (
    <div className='mt-6'>
      <h3 className='text-lg font-semibold mb-4 text-gray-700'>
        Selected Charts
      </h3>
      <div className='border rounded-lg p-4 bg-gray-50 shadow-md'>
        {selectedOptions.length > 0 ? (
          <ul className='space-y-2 pr-2'>
            {selectedOptions.map((option) => (
              <li
                key={option.value}
                className='bg-blue-100 text-blue-700 px-4 py-4 p-7 rounded-md flex justify-between items-center'>
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-500'>No charts selected.</p>
        )}
      </div>
    </div>
  );
};

export default SelectedItemsList;
