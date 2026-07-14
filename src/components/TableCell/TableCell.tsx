import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

// Internal props used only for styling.
interface StyledTableCellProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledTableCell = styled.td<StyledTableCellProps>`
  padding: 12px;
  border: 1px solid #d1d5db;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

// Main TableCell component.
export function TableCell({
  text = 'Table cell',
  backgroundColor = '#ffffff',
  disabled = false,
}: TableCellProps) {
  return (
    <StyledTableCell
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </StyledTableCell>
  );
}
