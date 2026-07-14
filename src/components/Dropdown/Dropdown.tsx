import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

// Internal props used only for styling.
interface StyledSelectProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 320px;
  width: 100%;
`;

const DropdownLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
`;

const StyledSelect = styled.select<StyledSelectProps>`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

// Main Dropdown component.
export function Dropdown({
  label = 'Choose an option',
  options = ['Option 1', 'Option 2', 'Option 3'],
  backgroundColor = '#ffffff',
  disabled = false,
}: DropdownProps) {
  return (
    <DropdownWrapper>
      <DropdownLabel htmlFor="dropdown">{label}</DropdownLabel>

      <StyledSelect
        id="dropdown"
        $backgroundColor={backgroundColor}
        $disabled={disabled}
        disabled={disabled}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
}
