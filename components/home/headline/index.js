import styled from 'styled-components';
import Button from 'material-ui/Button';

import { navHeight } from '../../../styles/layout';
import { greyBlue, turquoise, superTurquoise } from '../../../styles/colors';
import ToNext from './toNext';

const Headline = styled.div`
  max-height: calc(100vh - 72px - 23px);
  height: calc(100vh - 72px - 23px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
`;

const StyledImg = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 2.8rem;
  color: ${greyBlue};
  margin: 0;
  z-index: 1;

  @media (max-width: 786px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Info = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  color: ${greyBlue};
  margin-bottom: 2rem;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 1rem;
    font-weight: 200;
  }
`;

const StyledButton = styled(Button)`
  && {
    width: 20rem;
    height: 4rem;
    font-size: 1.3rem;
    color: white;
    background: ${turquoise};
    border-radius: 5rem;
    border: none;

    &:hover {
      background: ${superTurquoise};
    }

    @media (max-width: 480px) {
      width: 15rem;
      height: 3rem;
      font-size: 1rem;
    }
  }  
`;

const ToCryptoItems = styled.div`
  height: ${navHeight};
  z-index: -1;
  position: absolute;
  bottom: 0;
`;

const handleToNext = () => {
  document.getElementById('to-ourservices').scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default () => (
  <Headline id="headline">
    <StyledImg src="" />
    <Title>LOGO or TITLE</Title>
    <Info>Write Something Useful</Info>
    <StyledButton
      variant="flat"
      onClick={handleToNext}
    >
      Check Our Service
    </StyledButton>
    <ToNext />
    <ToCryptoItems id="to-companies" />
  </Headline>
);
