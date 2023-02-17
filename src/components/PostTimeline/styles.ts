import styled from "styled-components";

export const TagComment = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${props => props.theme["gray-600"]};

  &:focus-within Footer {
    visibility: visible;
    max-height: none;
  }
`

export const TitleComment = styled.strong`
  color: ${props => props.theme["gray-100"]};
  line-height: 1.6;
`

export const TextAreaComment = styled.textarea`
  width: 100%;
  background-color: ${props => props.theme["gray-900"]};
  border: 0;
  resize: none;
  height: 6rem;
  padding: 1rem;
  border-radius: 8px;
  color: ${props => props.theme["gray-100"]};
  line-height: 1.4;
  margin-top: 1rem;
`

export const Footer = styled.footer`
  visibility: hidden;
  max-height: 0;
`

export const ButtonSendoComment = styled.button`
  cursor: pointer;
  width: 8.125rem;
  height: 2.8125rem;
  background-color: ${props => props.theme["purple-300"]};
  color: ${props => props.theme.white};
  font-size: .9375rem;
  border: none;
  margin: 1rem 0;
  border-radius: 4px;

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${props => props.theme["red-500"]};
  }

  &:hover {
    background-color: ${props => props.theme["red-500"]};
  }
`