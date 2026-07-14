import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

// Storybook configuration for the Text component.
const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

// Default state.
export const Default: Story = {
  args: {
    text: 'This is a sample text component.',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    text: 'This text is disabled.',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
