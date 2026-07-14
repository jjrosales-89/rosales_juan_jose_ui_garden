import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

// Storybook configuration for the Button component
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],

  // Controls allow the user to change props inside Storybook.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default state required by the assignment.
export const Default: Story = {
  args: {
    text: 'Click Me',
    backgroundColor: '#2563eb',
    disabled: false,
  },
};

// Disabled state required by the assignment.
export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    backgroundColor: '#2563eb',
    disabled: true,
  },
};
