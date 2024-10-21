import { Meta, StoryObj } from "@storybook/react";
import TheGrid from "./Grid";
import { CARDINAL_DIRECTION } from "../utils/Types";

const meta: Meta<typeof TheGrid> = {
  title: "Components/Grid",
  component: TheGrid,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TheGrid>;

export const Case1: Story = {
  args: {
    position: { row: 4, col: 4, direction: CARDINAL_DIRECTION.NORTH }
  }
}

export const Case2: Story = {
  args: {
    position: { row: 0, col: 0, direction: CARDINAL_DIRECTION.SOUTH }
  }
}

export const Case3: Story = {
  args: {
    position: { row: 2, col: 3, direction: CARDINAL_DIRECTION.EAST }
  }
}

export const Case4: Story = {
  args: {
    position: { row: 1, col: 4, direction: CARDINAL_DIRECTION.WEST }
  }
}

export const Case5: Story = {
  args: {
    position: { row: 3, col: 1, direction: CARDINAL_DIRECTION.NORTH }
  }
}


export const Case6: Story = {
  args: {
    position: { row: 4, col: 2, direction: CARDINAL_DIRECTION.EAST }
  }
}