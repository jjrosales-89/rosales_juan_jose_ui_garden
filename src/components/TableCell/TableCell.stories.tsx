import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';

// Storybook configuration for the TableCell component.
const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },

  // Wraps the cell in a valid table structure.
  decorators: [
    (Story: any) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TableCell>;

// Default state.
export const Default: Story = {
  args: {
    text: 'Default cell',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    text: 'Disabled cell',
    backgroundColor: '#ffffff',
    disabled: true,
  },
};
