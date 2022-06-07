import styled from "styled-components";

export const StyledUserWelcome = styled.div`
  box-sizing: border-box;

  h1 {
    color: var(--blue);
    background: none;
    box-shadow: none;
  }

  svg {
    fill: var(--blue);
    height: 100px;
    width: 100px;
  }
`;

export const UserWelcomeWrapper = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
