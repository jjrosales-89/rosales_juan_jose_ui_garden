import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableFooter } from './TableFooter';

// Test 1: checks that the component is visible.
test('renders the table footer', () => {
  render(
    <table>
      <tfoot>
        <tr>
          <TableFooter text="Test Footer" />
        </tr>
      </tfoot>
    </table>,
  );

  expect(screen.getByText('Test Footer')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(
    <table>
      <tfoot>
        <tr>
          <TableFooter text="Disabled Footer" disabled />
        </tr>
      </tfoot>
    </table>,
  );

  const footer = screen.getByText('Disabled Footer');

  expect(footer).toHaveStyle('background-color: #cccccc');
  expect(footer).toHaveStyle('cursor: not-allowed');
});
