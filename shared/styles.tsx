import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);

export const TextCenter = styled.p`
  text-align: center;
`;

const cardSpacer = css`
  padding: 2rem;
`;

export const Card = styled.div`
  /* From https://css.glass */
  ${cardSpacer}
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.8px);
  -webkit-backdrop-filter: blur(9.8px);
`;