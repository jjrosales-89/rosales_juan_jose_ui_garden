import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

// Internal props used only for styling.
interface HeroWrapperProps {
  $imageUrl?: string;
  $backgroundColor?: string;
  $disabled?: boolean;
}

const HeroWrapper = styled.section<HeroWrapperProps>`
  width: 100%;
  min-height: 280px;
  padding: 48px 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#111827'};

  background-image: ${(props) =>
    props.$disabled
      ? 'none'
      : `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${props.$imageUrl})`};

  background-size: cover;
  background-position: center;

  color: white;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
`;

const HeroContent = styled.div`
  max-width: 640px;
`;

const HeroTitle = styled.h2`
  margin: 0 0 12px;
  font-size: clamp(2rem, 5vw, 3.5rem);
`;

const HeroSubtitle = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
`;

// Main HeroImage component.
export function HeroImage({
  title = 'Hero Image',
  subtitle = 'This is a responsive hero image component.',
  imageUrl = 'https://via.placeholder.com/1200x500',
  backgroundColor = '#111827',
  disabled = false,
}: HeroImageProps) {
  return (
    <HeroWrapper
      $imageUrl={imageUrl}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="hero-image"
    >
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroContent>
    </HeroWrapper>
  );
}
