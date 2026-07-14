import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

// Storybook configuration for the TableFooter component.
const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],

  // Controls required by the assignment.
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },

  // Wraps the footer in a valid table structure.
  decorators: [
    (Story: any) => (
      <table>
        <tfoot>
          <tr>
            <Story />
          </tr>
        </tfoot>
      </table>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

// Default state.
export const Default: Story = {
  args: {
    text: 'Total users: 2',
    backgroundColor: '#f9fafb',
    disabled: false,
  },
};

// Disabled state.
export const Disabled: Story = {
  args: {
    text: 'Disabled footer',
    backgroundColor: '#f9fafb',
    disabled: true,
  },
};
