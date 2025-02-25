import { Meta, StoryObj } from "@storybook/react";
import FileUpload from "./index";

const meta: Meta<typeof FileUpload> = {
  title: "Components/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFilesChange: (files: File[] | null) => {
      if (files) {
        console.log("Selected files:", files);
      }
    },
  },
};
