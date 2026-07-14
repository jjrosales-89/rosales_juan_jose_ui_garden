import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { RadioButton } from './RadioButton';

// Test 1: checks that the component is visible.
test('renders the radio button', () => {
  render(<RadioButton label="Test Radio" />);

  expect(screen.getByLabelText('Test Radio')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<RadioButton label="Disabled Radio" disabled />);

  const radioWrapper = screen.getByText('Disabled Radio').closest('label');

  expect(radioWrapper).toHaveStyle('background-color: #cccccc');
  expect(radioWrapper).toHaveStyle('cursor: not-allowed');
});
