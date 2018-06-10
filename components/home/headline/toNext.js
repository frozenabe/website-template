import styled from 'styled-components';

import { turquoise, superTurquoise } from '../../../styles/colors';

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  z-index: 4;

  &:hover #arrow {
    color: ${superTurquoise};
    fill: currentColor;
  }
`;

const handleToNext = () => {
  document.getElementById('to-companies').scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default () => (
  <Wrapper onClick={handleToNext}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 18 18"
    >
      <path id="arrow" d="M5 8l4 4 4-4z" fill={turquoise} />
    </svg>
  </Wrapper>
);
