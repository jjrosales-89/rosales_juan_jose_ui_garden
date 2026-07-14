import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

// Storybook configuration for the Label component.
const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

// Default state.
export const Default: Story = {
  args: {
    text: 'Username',
    backgroundColor: '#e5e7eb',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
    backgroundColor: '#e5e7eb',
    disabled: true,
  },
};
