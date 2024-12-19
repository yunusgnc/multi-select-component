import React from 'react';
import MultiSelectWithCreate from './component/MultiSelect/MultiSelectWithCreate';
import './index.css';

function App() {
  const options = [
    { value: 'line-chart', label: 'Line Chart' },
    { value: 'area-chart', label: 'Area Chart' },
    { value: 'column-chart', label: 'Column Chart' },
    { value: 'bar-chart', label: 'Bar Chart' },
    { value: 'pie-chart', label: 'Pie Chart' },
    { value: 'scatter-chart', label: 'Scatter Chart' },
    { value: 'bubble-chart', label: 'Bubble Chart' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 via-gray-100 to-gray-300 flex flex-col justify-center items-center'>
      <div className='bg-white shadow-lg rounded-lg  w-10/12 max-w-lg'>
        <MultiSelectWithCreate options={options} />
      </div>
    </div>
  );
}

export default App;
