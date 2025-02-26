import React, { useState } from 'react';
import Toast from '.'; // Ensure the correct import path

// Default export configuration for Storybook
export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'], // Automatically generate documentation
  argTypes: {
    status: {
      control: { type: 'select', options: ['info', 'warning', 'success', 'error', 'saving', 'updated'] },
      defaultValue: 'info',
    },
    message: { control: { type: 'text' }, defaultValue: 'This is a toast message.' },
  },
};

const Template = (args: { status: string; message: string }) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Toast disappears after 3 seconds
  };

  return (
    <div>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleClick}>
        Show Toast
      </button>
      {showToast && <Toast {...args} />}
    </div>
  );
};

// Default Toast story
export const DefaultToast = Template.bind({});
DefaultToast.args = {
  status: 'info',
  message: 'This is an info toast.',
};

// Success Toast story
export const SuccessToast = Template.bind({});
SuccessToast.args = {
  status: 'success',
  message: 'This is a success toast.',
};

// Warning Toast story
export const WarningToast = Template.bind({});
WarningToast.args = {
  status: 'warning',
  message: 'This is a warning toast.',
};

// Error Toast story
export const ErrorToast = Template.bind({});
ErrorToast.args = {
  status: 'error',
  message: 'This is an error toast.',
};

// Saving Toast story
export const SavingToast = Template.bind({});
SavingToast.args = {
  status: 'saving',
  message: 'This is a saving toast.',
};

// Updated Toast story
export const UpdatedToast = Template.bind({});
UpdatedToast.args = {
  status: 'updated',
  message: 'This is an updated toast.',
};
