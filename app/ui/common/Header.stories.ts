import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Header } from "./Header";

const meta = {
  title: "Common/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
