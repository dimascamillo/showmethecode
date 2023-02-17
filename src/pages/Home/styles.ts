import styled from "styled-components";

export const Main = styled.main`
  margin-top: 1.25rem;
  ${props => props.theme["display-flex-space-between-flex-start"]};
  gap: 1.875rem;
`

export const ProfileCard = styled.aside`
  width: 20rem;
  border: 1px solid ${props => props.theme["gray-100"]};
  border-radius: 8px;
  ${props => props.theme["display-flex-flex-direction-column"]};
  padding-bottom: 1.25rem;

  a {
    margin-top: 1.25rem;
    font-size: .75rem;
    padding: .5rem 1.5625rem;
    text-align: center;
    border: 1px solid ${(props) => props.theme["purple-300"]};
    cursor: pointer;
    background-color: transparent;
    ${(props) => props.theme.transition};

    &:hover {
      background-color: ${(props) => props.theme["purple-300"]};
      color: ${(props) => props.theme.white};
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500'
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const ProfileCardHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`

export const Avatar = styled.div<StatusProps>`
  width: 3.75rem;
  margin-top: -1.80rem;

  img {
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
export const ProfileTitle = styled.span`
  margin-top: .5rem;
  font-size: .875;
  color: ${(props) => props.theme["gray-900"]};
  text-align: center;
  line-height: 1.6;
`

export const ProfileRole = styled.span`
  font-size: .75rem;
  color: ${(props) => props.theme["gray-500"]};
  text-align: center;
`

export const Timeline = styled.section`
  width: 100%;
`

export const NewPost = styled.button`
  cursor: pointer;
  width: 8.125rem;
  height: 2.8125rem;
  background-color: ${props => props.theme["purple-300"]};
  color: ${props => props.theme.white};
  font-size: .9375rem;
  border: none;
  ${props => props.theme.transition};

  &:hover {
    background-color: ${props => props.theme["red-500"]};
  }
`

export const Post = styled.article`
  background-color: ${props => props.theme["gray-800"]};
  border-radius: 8px;
  padding: 2.5rem;

  & + & {
    margin-top: 2rem;
  }
`

export const PostHeader = styled.header`

`

export const Author = styled.div`

`

export const AuthorInfo = styled.div`

`

export const AuthorInfoName = styled.strong`

`

export const AuthorInfoRole = styled.span`

`

export const Time = styled.time`

`

export const Content = styled.div`

`

export const TitlePost = styled.h2`

`

export const Pre = styled.pre`

`