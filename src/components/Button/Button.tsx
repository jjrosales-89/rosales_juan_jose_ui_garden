import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// Internal props for styling only.
// The $ symbol prevents these props from being passed to the real HTML button.
interface StyledButtonProps {
  $backgroundColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;

  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.$backgroundColor || '#2563eb'};

  color: white;
  font-size: 1rem;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};

  width: fit-content;
  max-width: 100%;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.7 : 0.9)};
  }
`;

export function Button({
  text = 'Button',
  backgroundColor = '#2563eb',
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {text}
    </StyledButton>
  );
}
