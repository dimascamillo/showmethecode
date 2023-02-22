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

export const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500'
} as const

export interface StatusProps {
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

export const Container = styled.div<StatusProps>`
  img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 3px solid ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    outline: 2px solid transparent;
  }
`

export const Avatar = styled.div<StatusProps>`
  width: 3.75rem;
  margin-top: -1.80rem;

  img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 3px solid ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    outline: 2px solid transparent;
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
  margin-bottom: 2rem;
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
  ${props => props.theme["display-flex-space-between"]};
`

export const Author = styled.div<StatusProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    outline: 2px solid transparent;
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorInfoName = styled.strong`
  font-size: .875rem;
  color: ${props => props.theme.white};
  margin-top: 1rem;
  margin-bottom: .5rem;
  display: inline-block;
`

export const AuthorInfoRole = styled.span`
  display: block;
  font: .8125rem;
  color: ${props => props.theme["gray-500"]};
`

export const Time = styled.time`
  font: .8125rem;
  color: ${props => props.theme["gray-300"]};
`

export const Content = styled.div`
  line-height: 1.6;
  color: ${props => props.theme["gray-300"]};
  margin-top: 1.5rem;
`

export const TitlePost = styled.h2`
  color: ${props => props.theme.white};
`

export const Pre = styled.pre`
  position: relative;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme["green-700"]};
  border-radius: 8px;
  min-height: 150px;
  color: ${props => props.theme.white};

  svg {
    display: inline-block;
    cursor: pointer;
    position: absolute;
    right: 20px;
  }
`