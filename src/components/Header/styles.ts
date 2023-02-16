import styled from "styled-components";



export const TagHeader = styled.header`
  background-color: ${props => props.theme["purple-300"]};
  padding: 1rem 2rem;

  svg {
    cursor: pointer;
  }
  `
export const Container = styled.div`
  ${props => props.theme["display-flex-space-between"]};
  ${props => props.theme["container"]};
`
export const LogoHeader = styled.img`
  width: 5.625rem;
`
export const Menu = styled.nav`
 position: absolute;
 top: 0;
 right: -300px;
 width: 15rem;
 height: 100%;
 background-color: ${props => props.theme["gray-600"]};
 ${props => props.theme["display-flex-flex-direction-column"]};
 gap: .5rem;
 padding-top: 1rem;

 a {
  width: 2.5rem;
  text-decoration: none;
  color: ${props => props.theme.white};
  font-size: .75rem;
  text-align: center;
  border-bottom: 2px solid transparent;
  ${props => props.theme.transition};
  padding-bottom: .35rem;
 }

 a:hover {
  border-bottom: 2px solid ${props => props.theme["green-700"]};
 }

 .closeMenu {
  position: absolute;
  top: 8px;
  right: 15px;
 }

 .on {
  right: 0;
 }

 .off {
  right: -300px;
 }

`