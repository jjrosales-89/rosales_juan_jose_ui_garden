import styled from 'styled-components';
import { CardProps } from './Card.types';

// Internal props used only for styling.
interface StyledCardProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const StyledCard = styled.article<StyledCardProps>`
  width: 100%;
  max-width: 360px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  box-shadow: ${(props) =>
    props.$disabled ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.08)'};

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  color: ${(props) => (props.$disabled ? '#666666' : '#111827')};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
`;

const CardTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1.5rem;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

// Main Card component.
export function Card({
  title = 'Card Title',
  text = 'This is a responsive card component.',
  backgroundColor = '#ffffff',
  disabled = false,
}: CardProps) {
  return (
    <StyledCard
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="card"
    >
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </StyledCard>
  );
}
