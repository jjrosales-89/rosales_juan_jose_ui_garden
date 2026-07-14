import styled from 'styled-components';
import { TextProps } from './Text.types';

// Internal props used only for styling.
interface StyledTextProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledText = styled.p<StyledTextProps>`
  display: inline-block;
  padding: 10px 12px;
  border-radius: 6px;
  margin: 0;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  font-size: 1rem;
  line-height: 1.5;

  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  max-width: 100%;
`;

// Main Text component.
export function Text({
  text = 'Sample text',
  backgroundColor = '#ffffff',
  disabled = false,
}: TextProps) {
  return (
    <StyledText
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </StyledText>
  );
}
