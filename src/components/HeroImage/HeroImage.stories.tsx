import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

// Storybook configuration for the HeroImage component.
const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    imageUrl: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

// Default state.
export const Default: Story = {
  args: {
    title: 'Welcome to UI Garden',
    subtitle:
      'A responsive component library built with React, Storybook, and Styled Components.',
    imageUrl: 'https://via.placeholder.com/1200x500',
    backgroundColor: '#111827',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    title: 'Disabled Hero Image',
    subtitle: 'This hero image is in its disabled state.',
    imageUrl: 'https://via.placeholder.com/1200x500',
    backgroundColor: '#111827',
    disabled: true,
  },
};
