export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
