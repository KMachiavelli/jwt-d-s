import styled from "styled-components";

export const StyledUserPanel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  svg {
    width: 50px;
    height: 50px;
    fill: var(--blue);
  }
`;

export const PanelBar = styled.div`
  box-sizing: border-box;
  background: var(--blue);
  color: var(--white);
  border-radius: 10px 0 0 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0;
  }
`;

export const PanelData = styled.div`
  padding: 1.25rem;
  font-size: 1.25rem;
  border: solid var(--blue) 2px;
`;

export const InfoText = styled.div`
  span:nth-child(1) {
    color: var(--blue);
    line-height: 2;
  }
`;

export const UserPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsSection = styled.section`
  justify-content: flex-end;
  align-self: flex-end;
  margin: 10px;
`;
