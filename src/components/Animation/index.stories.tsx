import type { Meta, StoryObj } from "@storybook/react";
import Animation from "."; // Import the Animation component
import { Button } from "@/components/Button"; // Import the Button component

const meta: Meta<typeof Animation> = {
  title: "Components/Animation",
  component: Animation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    animationType: {
      control: {
        type: 'radio', // Radio buttons for animation type
        options: [
          "fade", 
          "shake", 
          "scaleUp", 
          "scaleDown", 
          "slideTop", 
          "slideBottom", 
          "slideLeft", 
          "slideRight"
        ], // Define the available options
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Story for Fade Animation
export const Fade: Story = {
  args: {
    animationType: "fade", // Apply fade animation
    children: <Button>Fade</Button>, // Wrap Button component with Animation
  },
};

// Story for Shake Animation
export const Shake: Story = {
  args: {
    animationType: "shake", // Apply shake animation
    children: <Button>Shake</Button>, // Wrap Button component with Animation
  },
};

// Story for Scale Up Animation
export const ScaleUp: Story = {
  args: {
    animationType: "scaleUp", // Apply scale up animation
    children: <Button>Scale Up</Button>, // Wrap Button component with Animation
  },
};

// Story for Scale Down Animation
export const ScaleDown: Story = {
  args: {
    animationType: "scaleDown", // Apply scale down animation
    children: <Button>Scale Down</Button>, // Wrap Button component with Animation
  },
};

// Story for Slide Top Animation
export const SlideTop: Story = {
  args: {
    animationType: "slideTop", // Apply slide top animation
    children: <Button>Slide Top</Button>, // Wrap Button component with Animation
  },
};

// Story for Slide Bottom Animation
export const SlideBottom: Story = {
  args: {
    animationType: "slideBottom", // Apply slide bottom animation
    children: <Button>Slide Bottom</Button>, // Wrap Button component with Animation
  },
};

// Story for Slide Left Animation
export const SlideLeft: Story = {
  args: {
    animationType: "slideLeft", // Apply slide left animation
    children: <Button>Slide Left</Button>, // Wrap Button component with Animation
  },
};

// Story for Slide Right Animation
export const SlideRight: Story = {
  args: {
    animationType: "slideRight", // Apply slide right animation
    children: <Button>Slide Right</Button>, // Wrap Button component with Animation
  },
};
