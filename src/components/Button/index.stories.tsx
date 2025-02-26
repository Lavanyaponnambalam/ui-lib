import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

/** Buttons allow users to take actions, and make choices, with a single tap. */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" }, // Use radio buttons for variant
      options: ["solid", "outline", "ghost", "surface", "plain"], // All button variants
      description: "Variant of the button",
    },
    size: {
      control: { type: "radio" }, // Use radio buttons for size
      options: [ "sm", "md", "lg"], // Available button sizes
      description: "Size of the button",
    },
    colorscheme: {
      control: { type: "radio" }, // Use radio buttons for colors
      options: [

        "red",
        "blue",
        "green",
        "teal",
        "yellow",
        "purple",
        "pink",
        "accent",
      ], // Color palette options
      description: "Color palette of the button",
    },
    loading: {
      control: "boolean", // Boolean control for loading state
      description: "Displays loading state when true",
    },
    loadingText: {
      control: "text", // Text control for loading text
      description: "Text displayed during the loading state",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**Solid buttons are used for primary actions with a filled background and prominent text.*/
export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorscheme: "blue", // Default color
    children: "Click Me",
  },
};

/**Outline buttons are used for secondary actions, featuring a border and transparent background.*/
export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md",
    colorscheme: "blue",
    children: "Click Me",
  },
};
/** Ghost buttons are subtle, with a transparent background and borderless design, often used for less emphasized actions.*/
export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    colorscheme: "blue",
    children: "Click Me",
  },
};
/**Loading buttons display a loading state, indicating the action is in progress. */
export const Loading: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorscheme: "blue",
    loading: true,
    loadingText: "Please wait...",
    children: "Click Me",
  },
};
/**Surface buttons are used for neutral actions, with a subtle background and text. */
export const Surface: Story = {
  args: {
    variant: "surface",
    size: "md",
    colorscheme: "blue",
    children: "Click Me",
  },
};
/**Plain buttons have a minimal design with no background, ideal for simple actions or links. */
export const Plain: Story = {
  args: {
    variant: "plain",
    size: "md",
    colorscheme: "blue",
    children: "Click Me",
  },
};
/**arge buttons are used for primary, high-visibility actions with extra size for better accessibility. */
export const Large: Story = {
  args: {
    variant: "solid",
    size: "lg",
    colorscheme: "blue",
    children: "Click Me",
  },
};
/**Small buttons are compact and ideal for secondary or less important actions in tight spaces. */
export const Small: Story = {
  args: {
    variant: "solid",
    size: "sm",
    colorscheme: "blue",
    children: "Click Me",
  },
};
