import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

// Test 1: checks that the component is visible.
test('renders the button', () => {
  render(<Button text="Test Button" />);
  expect(screen.getByRole('button', { name: 'Test Button' })).toBeVisible();
});

// Test 2: checks that the disabled state changes the style.
test('changes background color when disabled', () => {
  render(<Button text="Disabled Button" disabled />);
  const button = screen.getByRole('button', { name: 'Disabled Button' });

  expect(button).toHaveStyle('background-color: #cccccc');
  expect(button).toHaveStyle('cursor: not-allowed');
});
