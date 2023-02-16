import styled from "styled-components";

export interface PropsLogoHeader {
  alt?: string;
}

export const TagHeader = styled.header`
  ${props => props.theme["display-flex-space-between"]};
  background-color: ${props => props.theme["purple-300"]};
  padding: 1rem 2rem;
`
export const LogoHeader = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Zeyada&display=swap');
  font-family: 'Zeyada', cursive;
  font-size: 15px;
  color: ${props => props.theme["white"]};
`