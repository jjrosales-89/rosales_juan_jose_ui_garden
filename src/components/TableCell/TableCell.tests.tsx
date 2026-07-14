import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableCell } from './TableCell';

// Test 1: checks that the component is visible.
test('renders the table cell', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Test Cell" />
        </tr>
      </tbody>
    </table>,
  );

  expect(screen.getByText('Test Cell')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(
    <table>
      <tbody>
        <tr>
          <TableCell text="Disabled Cell" disabled />
        </tr>
      </tbody>
    </table>,
  );

  const cell = screen.getByText('Disabled Cell');

  expect(cell).toHaveStyle('background-color: #cccccc');
  expect(cell).toHaveStyle('cursor: not-allowed');
});
