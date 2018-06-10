import styled, { keyframes } from 'styled-components';

import { darkGrey } from '../../styles/colors';

const Bun = styled.div`
  height: 0.9rem;
  width: 2.5rem;
  padding: 0.8rem 0;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Circular = keyframes`
  from {
    transform: scale(1);
    opacity: 0.4;
  }
  to {
    transform: scale(1.2);
    opacity: 0;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 1.9rem;
  height: 1.8rem;
  margin-top: -0.5rem;
  margin-left: -0.4rem;
  display: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${Circular} 0.5s;
`;

const Patty = styled.span`
  width: 1.1rem;
  height: 0.12rem;
  background: ${darkGrey};
`;

const Cheese = styled(Patty)`
  height: 0.2rem;
  background: transparent;
`;

const handleCircleAnimation = () => {
  document.getElementsByClassName('circle')[0].style.display = 'block';
  document.getElementsByClassName('circle')[1].style.display = 'block';
  setTimeout(() => {
    document.getElementsByClassName('circle')[0].style.display = 'none';
    document.getElementsByClassName('circle')[1].style.display = 'none';
  }, 400);
};

export default ({ handleDrawer }) => (
  <Bun
    className="navButton"
    onMouseDown={handleCircleAnimation}
    onMouseUp={handleDrawer}
  >
    <Circle className="circle" />
    <Patty />
    <Cheese />
    <Patty />
    <Cheese />
    <Patty />
  </Bun>
);
