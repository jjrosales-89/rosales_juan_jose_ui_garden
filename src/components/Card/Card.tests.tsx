import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

// Test 1: checks that the component is visible.
test('renders the card', () => {
  render(<Card title="Test Card" />);

  expect(screen.getByText('Test Card')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<Card title="Disabled Card" disabled />);

  const card = screen.getByTestId('card');

  expect(card).toHaveStyle('background-color: #cccccc');
  expect(card).toHaveStyle('cursor: not-allowed');
});
