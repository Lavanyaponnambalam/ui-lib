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

    const openDrawer = () => setIsDrawerOpen(true);  // Open drawer
    const closeDrawer = () => setIsDrawerOpen(false);  // Close drawer

    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-6 relative">
        {/* Button to open the drawer */}
        <button
          onClick={openDrawer}
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Open Drawer
        </button>

        {/* Full-Screen Drawer Component */}
        {isDrawerOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50">
            {/* Drawer content */}
            <Drawer
              isOpen={isDrawerOpen}
              onClose={closeDrawer}
              className="fixed top-0 right-0 w-full h-full bg-white"
            />
          </div>
        )}
      </div>
    );
  },
};
