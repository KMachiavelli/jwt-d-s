import styled from "styled-components";

export const StyledTokenError = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--orange);

  h2 {
    text-align: center;
  }

  svg {
    fill: var(--orange);
    width: 100px;
    height: 100px;
    align-self: center;
  }
`;
