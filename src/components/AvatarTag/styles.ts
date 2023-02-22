import styled from "styled-components";

export const TagAvatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme["gray-700"]};
  outline: 2px solid ${props => props.theme["green-500"]};

  .noBorder {
    width: 4rem;
    height: 4rem;
    border-radius: 8px;
  }
`