import styled from "styled-components"

export const NewPost = styled.button`
  cursor: pointer;
  width: 8.125rem;
  height: 2.8125rem;
  background-color: ${props => props.theme["purple-300"]};
  color: ${props => props.theme.white};
  font-size: .9375rem;
  border: none;
  ${props => props.theme.transition};
  margin-bottom: 1rem;
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.theme["red-500"]};
  }
`