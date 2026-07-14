import styled from 'styled-components';
import { ImgProps } from './Img.types';

// Internal props used only for styling.
interface ImageWrapperProps {
  $backgroundColor?: string;
  $disabled?: boolean;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: inline-block;
  padding: 8px;
  border-radius: 8px;

  background-color: ${(props) =>
    props.$disabled ? '#cccccc' : props.$backgroundColor || '#ffffff'};

  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  opacity: ${(props) => (props.$disabled ? 0.7 : 1)};
  max-width: 100%;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 6px;
`;

// Main Img component.
export function Img({
  src = 'https://via.placeholder.com/320x180',
  alt = 'Sample image',
  backgroundColor = '#ffffff',
  disabled = false,
}: ImgProps) {
  return (
    <ImageWrapper
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
      data-testid="image-wrapper"
    >
      <StyledImg src={src} alt={alt} />
    </ImageWrapper>
  );
}
