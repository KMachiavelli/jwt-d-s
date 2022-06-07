import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  border: solid var(--blue) 2px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 9px 11px 5px var(--blue-reduced);

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

  button:nth-of-type(2) {
    width: auto;
  }
`;
