// DatePicker/index.stories.tsx
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CustomDatePicker from "./index"; // Import the DatePicker component

const meta: Meta<typeof CustomDatePicker> = {
  title: "Components/DatePicker",
  component: CustomDatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDate: new Date(),
    onChange: (date: Date | null) => {
      console.log(date); // Log the selected date to the console
    },
  },
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState(args.selectedDate);

    const handleChange = (date: Date | null) => {
      setSelectedDate(date);
      args.onChange(date); // Optionally pass the date to Storybook's onChange handler
    };

    return (
      <div className="flex justify-center items-center h-screen">
        <CustomDatePicker selectedDate={selectedDate} onChange={handleChange} />
      </div>
    );
  },
};
