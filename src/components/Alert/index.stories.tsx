import React from 'react';
import Alert from '.'; // Adjust the import path as needed
 
// Default export configuration for Storybook
export default {
  title: 'Components/Alert', // The title in Storybook sidebar
  component: Alert,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'success', 'error', 'neutral'],
      },
      defaultValue: 'info',
    },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'subtle', 'surface'],
      },
      defaultValue: 'solid',
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      defaultValue: 'md',
    },
    message: {
      control: {
        type: 'text',
      },
      defaultValue: 'This is an alert message.',
    },
  },
};

// Template for the Alert story
const Template = (args: any) => <Alert {...args} />;

// Default Alert story
export const DefaultAlert = Template.bind({});
DefaultAlert.args = {
  status: 'info',
  variant: 'solid',
  size: 'md',
  message: 'This is an info alert.',
};

// Warning Alert story
export const WarningAlert = Template.bind({});
WarningAlert.args = {
  status: 'warning',
  variant: 'outline',
  size: 'lg',
  message: 'This is a warning alert.',
};

// Success Alert story
export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  status: 'success',
  variant: 'subtle',
  size: 'sm',
  message: 'This is a success alert.',
};

// Error Alert story
export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  status: 'error',
  variant: 'surface',
  size: 'md',
  message: 'This is an error alert.',
};
