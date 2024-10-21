import { Meta, StoryObj } from "@storybook/react";
import ArrowIcon from "./ArrowIcon";
import { CARDINAL_DIRECTION } from "../utils/Types";

const meta: Meta<typeof ArrowIcon> = {
  title: "Components/ArrowIcon",
  component: ArrowIcon,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof ArrowIcon>;

export const North: Story = {
  args: {
    direction: CARDINAL_DIRECTION.NORTH
  },
}

export const South: Story = {
  args: {
    direction: CARDINAL_DIRECTION.SOUTH
  },
}

export const East: Story = {
  args: {
    direction: CARDINAL_DIRECTION.EAST
  },
}

export const West: Story = {
  args: {
    direction: CARDINAL_DIRECTION.WEST
  },
}