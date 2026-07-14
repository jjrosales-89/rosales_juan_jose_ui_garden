import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

// Test 1: checks that the component is visible.
test('renders the text', () => {
  render(<Text text="Test Text" />);

  expect(screen.getByText('Test Text')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<Text text="Disabled Text" disabled />);

  const text = screen.getByText('Disabled Text');

  expect(text).toHaveStyle('background-color: #cccccc');
  expect(text).toHaveStyle('cursor: not-allowed');
});
