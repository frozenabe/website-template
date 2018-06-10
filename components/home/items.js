import styled from 'styled-components';

import {
  grey,
  lightGrey,
  greyBlue,
  channelIOBlue,
} from '../../styles/colors';

const Wrapper = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${lightGrey};
`;

const StyledP = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  color: ${grey};
`;

const StyledDiv = styled.div`
  width: 80%;
  font-size: 1.5rem;
  color: ${greyBlue};
  display: flex;
  justify-content: space-around;

  @media (max-width: 786px) {
    overflow: auto;
    justify-content: flex-start;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 1px;

  @media (max-width: 786px) {
    margin: 0 0.5rem;
  }

  &:hover {
    margin: 0;
    border: 1px solid blue;
    color: ${channelIOBlue};

    @media (max-width: 786px) {
      border: none;
      margin: 0 0.5rem;
    }
  }

  
`;

const Arrow = styled.span`
  display: none;
  position: absolute;
  right: 1rem;
  margin-top: 3.5rem;

  @media (max-width: 786px) {
    display: block;
  }
`;

const goToThisImage = (i) => {
  document.getElementById(`named-image-${i}`).scrollIntoView({ block: 'start', behavior: 'smooth' });
};

const IMAGE_LIST = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default () => (
  <Wrapper>
    <StyledP>Title</StyledP>
    <StyledDiv>
      {IMAGE_LIST.map((list, i) => (
        <StyledSpan key={`list-span-${i * 10}`} onClick={() => goToThisImage(i)}>
          {list}
        </StyledSpan>
      ))}
    </StyledDiv>
    <Arrow id="arrow">&gt;</Arrow>
  </Wrapper>
);
