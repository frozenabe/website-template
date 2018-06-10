import styled from 'styled-components';

import { navHeight } from '../../styles/layout';
import { grey } from '../../styles/colors';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

const Container = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 786px) {
    width: 90%;
  }
`;

const InnerContainer = styled.div`
  width: ${(1 / 3) * 100}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 3.5rem;
  font-weight: 500;
  color: black;
  margin-top: 1rem;

  @media (max-width: 786px) {
    font-size: 2.2rem;
    font-weight: 200;
  }
`;

const StyledText = styled.text`
  font-size: 1.3rem;
  color: ${grey};

  @media (max-width: 786px) {
    font-size: 0.9rem;
  }
`;

const ToOurServices = styled.div`
  height: ${navHeight};
  width: 100%;
`;

export default () => (
  <Wrapper>
    <Container>
      <InnerContainer>
        <StyledSpan>#</StyledSpan>
        <StyledText>STAT1</StyledText>
      </InnerContainer>
      <InnerContainer>
        <StyledSpan>#</StyledSpan>
        <StyledText>STAT2</StyledText>
      </InnerContainer>
      <InnerContainer>
        <StyledSpan>#</StyledSpan>
        <StyledText>STAT3</StyledText>
      </InnerContainer>
    </Container>
    <ToOurServices id="to-ourservices" />
  </Wrapper>
);
