import styled from 'styled-components';

import { turquoise, superTurquoise } from '../../styles/colors';
import { handleBuyOrConsign } from '../../layout/nav/buyOrConsign';

const Wrapper = styled.div`
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${turquoise};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledP = styled.p`
  margin-right: 2rem;
  color: white;
  font-size: 1.15rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }
`;

const StyledA = styled.a`
  width: 11rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.7rem;
  font-size: 0.9rem;
  font-weight: 800;
  color: ${turquoise};
  text-decoration: none;
  border-radius: 2rem;
  background: white;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0,0,0,0.10), 0 3px 10px rgba(0,0,0,0.10);

  &:hover {
    background: ${superTurquoise};
    color: white;
  }

  @media (max-width: 768px) {
    height: 1.3rem;
    width: 9rem;
    font-size: 0.8rem;
  }
`;

export default () => (
  <Wrapper>
    <StyledP>Title</StyledP>
    <StyledA onClick={handleBuyOrConsign}>StyledButton</StyledA>
  </Wrapper>
);
