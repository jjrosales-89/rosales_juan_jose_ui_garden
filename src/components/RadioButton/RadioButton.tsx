import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

// Internal props used only for styling.
interface RadioWrapperProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const RadioWrapper = styled.label<RadioWrapperProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 6px;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  max-width: 100%;
`;

const StyledRadio = styled.input`
  cursor: inherit;
`;

// Main RadioButton component.
export function RadioButton({
  label = 'Radio option',
  name = 'radio-group',
  backgroundColor = '#ffffff',
  disabled = false,
}: RadioButtonProps) {
  return (
    <RadioWrapper
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      <StyledRadio type="radio" name={name} disabled={disabled} />
      {label}
    </RadioWrapper>
  );
}
