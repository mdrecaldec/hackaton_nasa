import React from 'react';

const DatePicker = ({ onDateChange }) => (
  <div className="my-3">
    <label htmlFor="date-picker" className="form-label">
      Selecciona una fecha:
    </label>
    <input
      type="date"
      id="date-picker"
      className="form-control"
      onChange={(e) => onDateChange(e.target.value)}
    />
  </div>
);

export default DatePicker;
