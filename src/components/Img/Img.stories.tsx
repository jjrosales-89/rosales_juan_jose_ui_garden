import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

// Storybook configuration for the Img component.
const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

// Default state.
export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/320x180',
    alt: 'Default image',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/320x180',
    alt: 'Disabled image',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
