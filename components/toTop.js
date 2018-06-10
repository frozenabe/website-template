import styled from 'styled-components';

import { isChrome } from '../components/checkBrowser';

const Wrapper = styled.div`
  position: fixed;
  width: 2.2rem;
  height: 2.2rem;
  right: 0;
  margin-right: 1rem;
  bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 0.1rem grey;
  border-radius: 50%;
  cursor: pointer;
  z-index: 4;
  transition: bottom 0.2s;
  background: transparent;
`;

const ToTop = styled.button`
  margin-top: 0.5rem;
  padding: 0.4rem;
  outline: none;
  border: solid grey;
  border-width: 0 0.4rem 0.4rem 0;
  background: transparent;
  transform: rotate(-135deg);
  cursor: pointer;
`;

const handleToTop = () => {
  /* eslint no-unused-expressions: 0 */
  isChrome
    ? document.body.scrollIntoView({ block: 'start', behavior: 'smooth' })
    : document.getElementById('headline').scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default () => (
  <Wrapper id="to-top" onClick={handleToTop}>
    <ToTop />
  </Wrapper>
);
