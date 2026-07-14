import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

// Internal props used only for styling.
interface StyledTableRowProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledTableRow = styled.tr<StyledTableRowProps>`
  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

// Main TableRow component.
export function TableRow({
  text = 'Table row',
  backgroundColor = '#ffffff',
  disabled = false,
}: TableRowProps) {
  return (
    <StyledTableRow
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      <td>{text}</td>
    </StyledTableRow>
  );
}
