import styled from 'styled-components';
import { LabelProps } from './Label.types';

// Internal props used only for styling.
// The $ prefix prevents these props from appearing on the real HTML label.
interface StyledLabelProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 6px;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#e5e7eb'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  font-size: 1rem;
  font-weight: 600;

  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  max-width: 100%;
`;

// Main Label component.
export function Label({
  text = 'Label',
  htmlFor,
  backgroundColor = '#e5e7eb',
  disabled = false,
}: LabelProps) {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
}
