import styled from 'styled-components';

import { lightTurquoise } from '../../styles/colors';

const Wrapper = styled.div`
  background:${lightTurquoise};
  padding-top: 1rem;
`;

const OverviewContainer = styled.div`
  text-align: center;
`;

const OverviewTitle = styled.h2`
  width: 17rem;
  margin: 0 auto;
  font-size: 2rem;
  color: white;

  @media (max-width: 480px) {
    font-size: 1.5rem;    
  }
`;

const Overview = styled.p`
  width: 45rem;
  margin: 2rem auto;
  font-size: 0.9rem;
  line-height: 1.8;
  color: white;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 65%;
    font-size: 0.85rem;    
  }
`;

const ListContainer = styled.div`
  padding-bottom: 2rem;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledList = styled.div`
  height: 25rem;
  width: 30%;
  min-width: 15rem;
  margin: 0 0 3rem 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.10), 0 3px 20px rgba(0,0,0,0.10);

  @media (max-width: 1028px) {
    min-width: 45%;
  }
  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

const StyledImg = styled.img`
  height: 12rem;
  margin-top: 4rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const ITEMs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export default () => (
  <Wrapper>
    <OverviewContainer>
      <OverviewTitle>Title</OverviewTitle>
      <Overview>
        Write Something Useful
      </Overview>
      <ListContainer>
        {ITEMs.map((img, i) => (
          <StyledList id={`item-image-${i}`} key={`image-list-${i * 10}`}>
            <StyledImg src={ITEMs[i]} />
          </StyledList>
        ))}
      </ListContainer>
    </OverviewContainer>
  </Wrapper>
);
