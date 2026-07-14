import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableRow } from './TableRow';

// Test 1: checks that the component is visible.
test('renders the table row', () => {
  render(
    <table>
      <tbody>
        <TableRow text="Test Row" />
      </tbody>
    </table>,
  );

  expect(screen.getByText('Test Row')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(
    <table>
      <tbody>
        <TableRow text="Disabled Row" disabled />
      </tbody>
    </table>,
  );

  const row = screen.getByText('Disabled Row').closest('tr');

  expect(row).toHaveStyle('background-color: #cccccc');
  expect(row).toHaveStyle('cursor: not-allowed');
});
