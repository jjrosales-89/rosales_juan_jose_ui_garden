import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

// Storybook configuration for the Table component.
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

// Default state.
export const Default: Story = {
  args: {
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
