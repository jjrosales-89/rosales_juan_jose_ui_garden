import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableHeader } from './TableHeader';

// Test 1: checks that the component is visible.
test('renders the table header', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Test Header" />
        </tr>
      </thead>
    </table>,
  );

  expect(screen.getByText('Test Header')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(
    <table>
      <thead>
        <tr>
          <TableHeader text="Disabled Header" disabled />
        </tr>
      </thead>
    </table>,
  );

  const header = screen.getByText('Disabled Header');

  expect(header).toHaveStyle('background-color: #cccccc');
  expect(header).toHaveStyle('cursor: not-allowed');
});
