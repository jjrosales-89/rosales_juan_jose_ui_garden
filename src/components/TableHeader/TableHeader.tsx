import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

// Internal props used only for styling.
interface StyledTableHeaderProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledTableHeader = styled.th<StyledTableHeaderProps>`
  padding: 12px;
  border: 1px solid #d1d5db;
  text-align: left;
  font-weight: 700;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#f3f4f6'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

// Main TableHeader component.
export function TableHeader({
  text = 'Header',
  backgroundColor = '#f3f4f6',
  disabled = false,
}: TableHeaderProps) {
  return (
    <StyledTableHeader
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </StyledTableHeader>
  );
}
