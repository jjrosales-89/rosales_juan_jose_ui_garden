import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

// Test 1: checks that the component is visible.
test('renders the hero image', () => {
  render(<HeroImage title="Test Hero" />);

  expect(screen.getByText('Test Hero')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<HeroImage title="Disabled Hero" disabled />);

  const hero = screen.getByTestId('hero-image');

  expect(hero).toHaveStyle('background-color: #cccccc');
  expect(hero).toHaveStyle('cursor: not-allowed');
});
