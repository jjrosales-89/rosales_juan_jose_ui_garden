import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

// Test 1: checks that the component is visible.
test('renders the label', () => {
  render(<Label text="Test Label" />);

  expect(screen.getByText('Test Label')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<Label text="Disabled Label" disabled />);

  const label = screen.getByText('Disabled Label');

  expect(label).toHaveStyle('background-color: #cccccc');
  expect(label).toHaveStyle('cursor: not-allowed');
});
