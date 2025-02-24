// src/components/Box/Box.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Layout/Box', // Storybook title where the component will be listed
  component: Box,
  parameters: {
    layout: 'centered', // Center the component in the preview
  },
  tags: ['autodocs'], // Automatically generates documentation for the component
  argTypes: {
    className: { control: 'text' }, // Allows you to pass custom className for styling
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Box Story
export const Default: Story = {
  args: {
    children: 'This is a Box component',
    className: 'p-4 bg-gray-300', // You can provide default class names like padding and background color
  },
};

// Box with Custom Styling
export const CustomStyled: Story = {
  args: {
    children: 'Box with Custom Styles',
    className: 'w-64 h-64 bg-blue-500 text-white flex items-center justify-center', // Custom width, height, and styling
  },
};
