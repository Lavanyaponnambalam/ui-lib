// src/components/Table/index.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './index';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: {
        type: 'array', // Use array control for columns (array of strings)
      },
      description: 'Array of column names',
    },
    data: {
      control: {
        type: 'object', // Use object control for rows (array of objects)
      },
      description: 'Array of data rows, where each row is an object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Table Story
export const Default: Story = {
  args: {
    columns: ['Name', 'Age', 'Location'], // Example columns
    data: [
      { Name: 'Alice', Age: 25, Location: 'New York' },
      { Name: 'Bob', Age: 30, Location: 'California' },
      { Name: 'Charlie', Age: 35, Location: 'Texas' },
    ], // Example data rows
  },
};

// Custom Styled Table Story
export const CustomStyled: Story = {
  args: {
    columns: ['Product', 'Price', 'Quantity'], // Custom columns
    data: [
      { Product: 'Laptop', Price: '$999', Quantity: 10 },
      { Product: 'Headphones', Price: '$199', Quantity: 25 },
      { Product: 'Smartphone', Price: '$799', Quantity: 15 },
    ], // Custom data rows
  },
};
