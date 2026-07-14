import styled from 'styled-components';
import { TableProps } from './Table.types';

// Internal props used only for styling.
interface StyledTableProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const TableWrapper = styled.div<StyledTableProps>`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 400px;
  border-collapse: collapse;
  font-size: 1rem;
`;

const StyledTh = styled.th`
  padding: 12px;
  border: 1px solid #d1d5db;
  text-align: left;
  background-color: #f3f4f6;
`;

const StyledTd = styled.td`
  padding: 12px;
  border: 1px solid #d1d5db;
`;

// Main Table component with sample data.
export function Table({
  backgroundColor = '#ffffff',
  disabled = false,
}: TableProps) {
  return (
    <TableWrapper
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="table-wrapper"
    >
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Email</StyledTh>
            <StyledTh>Status</StyledTh>
          </tr>
        </thead>

        <tbody>
          <tr>
            <StyledTd>Alex Smith</StyledTd>
            <StyledTd>alex@example.com</StyledTd>
            <StyledTd>Active</StyledTd>
          </tr>
          <tr>
            <StyledTd>Maria Lee</StyledTd>
            <StyledTd>maria@example.com</StyledTd>
            <StyledTd>Pending</StyledTd>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <StyledTd colSpan={3}>Total users: 2</StyledTd>
          </tr>
        </tfoot>
      </StyledTable>
    </TableWrapper>
  );
}
