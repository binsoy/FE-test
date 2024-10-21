import { Meta, StoryObj } from "@storybook/react";
import CustomAlert from "./Alert";
import { ConstantValues, ErrorMessages } from "../utils/Constants";

const meta: Meta<typeof CustomAlert> = {
  title: "Components/CustomAlert",
  component: CustomAlert,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof CustomAlert>;

export const InvalidDirection: Story = {
  args: {
    error: true,
    message: ErrorMessages.ERR01
  },
}

export const EmptyDirection: Story = {
  args: {
    error: true,
    message: ErrorMessages.ERR02
  },
};

export const OutOfBounce: Story = {
  args: {
    error: true,
    message: ErrorMessages.ERR03
  },
};

export const WrongCoordinateFormat: Story = {
  args: {
    error: true,
    message: ErrorMessages.ERR04
  },
};

export const WrongDirectionFormat: Story = {
  args: {
    error: true,
    message: ErrorMessages.ERR05
  },
};