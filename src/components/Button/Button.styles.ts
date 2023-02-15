import styled from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'

interface TagButtonProps {
  variant: ButtonVariant
}

export const TagButton = styled.button<TagButtonProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
`
