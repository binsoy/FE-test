import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField from './InputField'; // Make sure the path is correct
import { Position } from '../utils/Types'; // Import types

// Storybook Meta Configuration
export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    inputValue: { control: 'text', defaultValue: '0,2 north' },  // Add control for inputValue
  },
} as Meta;

interface InputFieldStoryProps {
  inputValue: string;
}

// Define the template for the component
const Template: StoryFn<InputFieldStoryProps> = (args) => {
  const [position, setPosition] = useState<Position | null>(null);

  // Simulate inputChange callback
  const handleInputChange = (pos: Position) => {
    setPosition(pos); // Update state with new position
  };

  return (
    <div>
      <InputField
        inputChange={handleInputChange}
      />
    </div>
  );
};

export const Default = Template.bind({});

// You can now pass inputValue from Storybook controls
Default.args = {
  inputValue: '0,2 north', // Default test case for Storybook
};