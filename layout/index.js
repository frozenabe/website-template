import styled from 'styled-components';

import Nav from './nav';
import Footer from './footer';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  flex-grow: 1;
`;

export default ({
  isFirst,
  isQnA,
  restrict,
  children,
}) => (
  <Wrapper>
    <Nav isFirst={isFirst} />
    <Contents id="contents">{!restrict ? children : null}</Contents>
    <Footer isFirst={isFirst} isQnA={isQnA} />
  </Wrapper>
);
