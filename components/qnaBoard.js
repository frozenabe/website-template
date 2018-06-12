import styled from 'styled-components';

import { darkGrey } from '../styles/colors';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: white;
`;

const Container = styled.div`
  width: 75%;
  .view {
    display: flex;
  }

  @media (max-width: 40rem) {
    width: 90%;
  }
`;

const Question = styled.div`
  height: 2rem;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: ${darkGrey};
  display: flex;
  align-items: center;
  background: rgba(252,207,1,1);
  cursor: pointer;

  &:hover {
    color: white;
  }

  @media (max-width: 40rem) {
    font-size: 0.9rem;
  }
`;

const Answer = styled.div`
  height: 4rem;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: none;
  align-items: center;
  color: white;
  background: ${darkGrey};
  cursor: pointer;

  @media (max-width: 40rem) {
    font-size: 0.9rem;
  }
`;

const questions = [
  'Q1',
  'Q2',
  'Q3',
  'Q4',
  'Q5',
  'Q6',
  'Q7',
  'Q8',
  'Q9',
];

const answers = [
  'A1',
  'A2',
  'A3',
  'A4',
  'A5',
  'A6',
  'A7',
  'A8',
  'A9',
];

const openAnswer = (index) => {
  document.getElementsByClassName(`answer-${index}`)[0].classList.toggle('view');
};

export default () => (
  <Wrapper>
    <Container>
      {questions.map((quest, i) => [
        <Question
          key={`question-key-${i * 10}`}
          onClick={() => openAnswer(i)}
        >
          {quest}
        </Question>,
        <Answer
          className={`answer-${i}`}
          key={`answer-key-${i * 10}`}
          onClick={() => openAnswer(i)}
        >
          {answers[i]}
        </Answer>,
      ])}
    </Container>
  </Wrapper>
);
