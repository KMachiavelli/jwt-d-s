import styled from "styled-components";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  padding: 16px;
  border: solid var(--blue) 2px;
  border-radius: 10px;
  box-shadow: 9px 11px 5px var(--blue-reduced);
  z-index: 1001;

  .MuiFormControl-root {
    width: 100%;
  }

  svg {
    width: 30%;
    height: 30%;
    fill: var(--blue);
  }

  button {
    width: 100%;
  }
`;

export const RejectedTile = styled.h5<{ isRejected: boolean }>`
  color: transparent;
  text-align: center;

  transition: 0.25s ease-in-out;
  margin-top: -40px;

  ${(props) => props.isRejected && `margin-top: 10px; color: var(--red);`}
`;
