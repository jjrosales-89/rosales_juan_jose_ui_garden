import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

// Internal props used only for styling.
interface StyledTableFooterProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledTableFooter = styled.td<StyledTableFooterProps>`
  padding: 12px;
  border: 1px solid #d1d5db;
  font-weight: 700;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#f9fafb'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

// Main TableFooter component.
export function TableFooter({
  text = 'Table footer',
  backgroundColor = '#f9fafb',
  disabled = false,
}: TableFooterProps) {
  return (
    <StyledTableFooter
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      {text}
    </StyledTableFooter>
  );
}
