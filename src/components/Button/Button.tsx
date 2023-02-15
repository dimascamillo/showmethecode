import { ButtonVariant, TagButton } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <TagButton variant={variant}>Enviar</TagButton>;
}
