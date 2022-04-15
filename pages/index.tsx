import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Card, TextCenter } from "../shared/styles";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 1) 50%,
    rgba(0, 159, 255, 1) 100%
  );
  min-height: 100vh;
  ${center}
`;

const LinkCenter = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const IndexPage = () => (
  <Main>
      <Card>
        <h1>Wongsakorn Chugasem</h1>
        <TextCenter>Devleloper@ODDS</TextCenter>
        <TextCenter>Email: contract@miwtoo.me</TextCenter>
        <LinkCenter>
          <a href="https://github.com/miwtoo">Github</a>
        <a href="https://www.facebook.com/miwtoo">Facebook</a>
        <a href="https://www.linkedin.com/in/wongsakorn-chugasem-17b564151/">linkedin</a>
        </LinkCenter>
      </Card>
  </Main>
);

export default IndexPage;
