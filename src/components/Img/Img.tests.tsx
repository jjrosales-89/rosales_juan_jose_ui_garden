import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Img } from './Img';

// Test 1: checks that the component is visible.
test('renders the image', () => {
  render(<Img alt="Test Image" />);

  expect(screen.getByAltText('Test Image')).toBeVisible();
});

// Test 2: checks that the disabled state changes the background color.
test('changes background color when disabled', () => {
  render(<Img alt="Disabled Image" disabled />);

  const imageWrapper = screen.getByTestId('image-wrapper');

  expect(imageWrapper).toHaveStyle('background-color: #cccccc');
  expect(imageWrapper).toHaveStyle('cursor: not-allowed');
});
