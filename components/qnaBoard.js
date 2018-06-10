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
  'QUESTION1',
  'QUESTION2',
  'QUESTION3',
  'QUESTION4',
  'QUESTION5',
  'QUESTION6',
  'QUESTION7',
  'QUESTION8',
  'QUESTION9',
];

const answers = [
  'ANSWER1',
  'ANSWER2',
  'ANSWER3',
  'ANSWER4',
  'ANSWER5',
  'ANSWER6',
  'ANSWER7',
  'ANSWER8',
  'ANSWER9',
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
