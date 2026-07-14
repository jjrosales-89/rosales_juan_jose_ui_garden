import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Dropdown } from './Dropdown';

// Test 1: checks that the component is visible.
test('renders the dropdown', () => {
  render(<Dropdown label="Test Dropdown" />);

  expect(screen.getByLabelText('Test Dropdown')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<Dropdown label="Disabled Dropdown" disabled />);

  const dropdown = screen.getByLabelText('Disabled Dropdown');

  expect(dropdown).toHaveStyle('background-color: #cccccc');
  expect(dropdown).toHaveStyle('cursor: not-allowed');
});
