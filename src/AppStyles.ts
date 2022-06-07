import styled from "styled-components";

export const StyledApp = styled.main`
  font-family: Arial, Helvetica, sans-serif;
  h1 {
    text-align: center;
    width: 100%;
    background: var(--blue);
    color: var(--white);
    box-shadow: 0px 5px 15px var(--blue);
  }
`;

export const InnerContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
