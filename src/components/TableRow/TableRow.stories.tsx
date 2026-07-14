import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';

// Storybook configuration for the TableRow component.
const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },

  // Wraps the row in a valid table structure.
  decorators: [
    (Story: any) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TableRow>;

// Default state.
export const Default: Story = {
  args: {
    text: 'Default row',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    text: 'Disabled row',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
