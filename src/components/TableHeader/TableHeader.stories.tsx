import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

// Storybook configuration for the TableHeader component.
const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },

  // Wraps the header in a valid table structure.
  decorators: [
    (Story: any) => (
      <table>
        <thead>
          <tr>
            <Story />
          </tr>
        </thead>
      </table>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

// Default state.
export const Default: Story = {
  args: {
    text: 'Name',
    backgroundColor: '#f3f4f6',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    text: 'Disabled Header',
    backgroundColor: '#f3f4f6',
    disabled: true,
  },
};
