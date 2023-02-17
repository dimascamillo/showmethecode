import styled from "styled-components";

export const ContainerComment = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
`

export const CommentBox = styled.div`
  flex: 1;
`

export const CommentContent = styled.div`
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 8px;
  padding: 1rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const AuthorAndTime = styled.div`
  display: flex;
  flex-direction: column;
`

export const Author = styled.strong`
  color: ${props => props.theme["gray-100"]};
  font-size: .875rem;
  line-height: 1.6;
`

export const Time = styled.time`
  font-size: .75rem;
  line-height: 1.6;
  color: ${props => props.theme["gray-400"]};
`

export const ButtonDelete = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${props => props.theme["gray-400"]};
  line-height: 0;
  border-radius: 2px;
  ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme["red-500"]};
  }
`

export const Comment = styled.p`
  color: ${props => props.theme["gray-100"]};
  margin-top: 1rem;
`

export const Footer = styled.footer`
  margin-top: 1rem;
`

export const ButtonThanks = styled.button`
  background-color: transparent;
  border: 0;
  color: ${props => props.theme["gray-400"]};
  cursor: pointer;
  display: flex;
  align-items: center;
  ${props => props.theme.transition};


  &:hover {
    color: ${props => props.theme["green-300"]};
  }

  svg {
    margin-right: .5rem;
  }
`

export const Thanks = styled.span`


`

export const CountLikes = styled.span`
  &::before{
    content: "•";
    padding: 0 .25rem;
  }
`


