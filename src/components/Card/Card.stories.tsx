import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

// Storybook configuration for the Card component.
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default state.
export const Default: Story = {
  args: {
    title: 'Default Card',
    text: 'This card is in its default state.',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    text: 'This card is in its disabled state.',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
