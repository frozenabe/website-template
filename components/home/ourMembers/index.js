import styled from 'styled-components';
import Button from 'material-ui/Button';

import { navHeight } from '../../../styles/layout';
import { grey, superTurquoise, rose } from '../../../styles/colors';
import Member from './member';

const Wrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  background: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  margin: 2.5rem;
  font-weight: 800;
  font-size: 2rem;
  color: ${grey};
`;

const StyledDiv = styled.div`
  max-width: 60rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  && {
    width: 15.5rem;
    height: 3rem;
    margin: 2rem 4rem 2rem 4rem;
    font-size: 0.9rem;
    color: white;
    background: ${rose};
    border-radius: 5rem;
    border: none;

    &:hover {
      background: ${superTurquoise};
    }
  }  
`;

const ToConsult = styled.div`
  height: ${navHeight};
  width: 100%;
`;

const handleToNext = () => {
  document.getElementById('to-consult').scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default () => (
  <Wrapper>
    <Container>
      <StyledH2>Our Team</StyledH2>
      <StyledDiv>
        <Member />
        <Member />
        <Member />
        <Member />
      </StyledDiv>
      <StyledButton
        variant="raised"
        onClick={handleToNext}
      >
        Write Something Useful
      </StyledButton>
      <ToConsult id="to-consult" />
    </Container>
  </Wrapper>
);
