import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

// Storybook configuration for the Dropdown component.
const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// Default state.
export const Default: Story = {
  args: {
    label: 'Select a course',
    options: ['React', 'Storybook', 'Docker'],
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    label: 'Disabled dropdown',
    options: ['React', 'Storybook', 'Docker'],
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
