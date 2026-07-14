import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';

// Test 1: checks that the table is visible.
test('renders the table', () => {
  render(<Table />);

  expect(screen.getByText('Alex Smith')).toBeVisible();
  expect(screen.getByText('Total users: 2')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<Table disabled />);

  const tableWrapper = screen.getByTestId('table-wrapper');

  expect(tableWrapper).toHaveStyle('background-color: #cccccc');
  expect(tableWrapper).toHaveStyle('cursor: not-allowed');
});
