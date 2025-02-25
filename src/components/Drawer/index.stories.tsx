import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./index"; // Import Drawer component

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false, // Initially, the drawer is closed
    onClose: () => {},
  },
  render: (args) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(args.isOpen);

    const openDrawer = () => setIsDrawerOpen(false);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        {/* Button to open the drawer */}
        <button
          onClick={openDrawer}
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Open Drawer
        </button>

        {/* Drawer Component */}
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      </div>
    );
  },
};
