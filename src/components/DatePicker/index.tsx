// DatePicker/index.tsx
import React, { useState } from "react";
import DatePicker from ".";
import "react-datepicker/dist/react-datepicker.css"; // Import the default styling for the date picker
import { ComponentProps } from "react";

type DatePickerProps = ComponentProps<"div"> & {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};

const CustomDatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, className }) => {
  return (
    <div className={`relative ${className}`}>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="MMMM d, yyyy"
        className="p-2 border border-gray-300 rounded-md"
        placeholderText="Select a date"
      />
    </div>
  );
};

export default CustomDatePicker;
