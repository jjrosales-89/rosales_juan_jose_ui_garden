// This defines the props that the Button component can receive
export interface ButtonProps {
  text?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
