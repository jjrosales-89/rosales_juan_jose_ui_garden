import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

// Storybook configuration for the RadioButton component.
const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

// Default state.
export const Default: Story = {
  args: {
    label: 'Default radio button',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    label: 'Disabled radio button',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
