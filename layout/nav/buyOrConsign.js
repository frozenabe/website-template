import styled from 'styled-components';
import axios from 'axios';
import Button from 'material-ui/Button';

import { darkGrey, turquoise, brightTurquoise } from '../../styles/colors';

const Wrapper = styled.div`
  .view {
    display: flex;
  }
`;

const StyledButton = styled(Button)`
  && {
    width: 7rem;
    height: 1rem;
    text-align: center;
    margin-right: 1rem;
    padding: 0.5rem 0.7rem;
    font-size: 0.7rem;
    font-weight: 800;
    color: ${({ sticky, first }) => (!first || sticky ? 'white' : turquoise)};
    border: 2px solid ${turquoise};
    border-radius: 2rem;
    background: ${({ sticky, first }) => (!first || sticky ? turquoise : 'auto')};
    border-color: ${({ sticky, first }) => (!first || sticky ? turquoise : 'auto')};
    cursor: pointer;

    &:hover {
      color: white;
      background: ${brightTurquoise};
      border-color: ${brightTurquoise};
    }
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  height: 27rem;
  width: 25rem;
  top: 10vh;
  right: 1%;
  display: none;
  border-radius: 0.5rem;
  flex-direction: column;
  background: white;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ModalNav = styled.div`
  height: 3rem;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: ${darkGrey};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding-left: 10%;
  text-align: center;
`;

const StyledSvg = styled.svg`
  width: 0.8rem;
  height: 1px;
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease-out;
`;

const StyledForm = styled.form`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-size: 0.8rem;
  font-weight: 800;
  color: rgb(119, 119, 119);
  margin-bottom: 0.5rem;
  color: black;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 0;
  outline: none;
  border: solid 0.05rem #dadada;
  border-radius: 0.2rem;

  &:hover {
    border: solid 0.05rem black;
  }
`;

const StyledTextArea = StyledInput.withComponent('textarea').extend`
  height: 6rem;
  resize: none;
`;

const SubmitButton = styled.input`
  font-size: 0.8rem;
  width: 5rem;
  height: 2.5rem;
  background: ${darkGrey};
  color: white;
  border-radius: 0.3rem;
  cursor: pointer;
  outline: none;
`;

export const handleBuyOrConsign = () => {
  document.getElementById('sales-modal').classList.toggle('view');
};

const COLUMNS = ['name', 'phone', 'email', 'comment'];

export default ({ sticky, isFirst }) => (
  <Wrapper>
    <StyledButton
      id="buy-or-consign"
      onClick={handleBuyOrConsign}
      sticky={sticky ? 1 : 0}
      first={isFirst ? 1 : 0}
    >
      StyledButton
    </StyledButton>
    <ModalWrapper id="sales-modal">
      <ModalNav>
        <StyledDiv>Nodemailer</StyledDiv>
        <StyledSvg onClick={handleBuyOrConsign}>
          <path d="M0 0H30V5H0z" fill="#fff" />
        </StyledSvg>
      </ModalNav>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          const data = {};
          COLUMNS.forEach((input) => {
            const { value } = document.getElementById(input);
            data[input] = value;
          });
          data.date = new Date();
          axios.post('/api/mailer/email', data)
            .then(() => {
              handleBuyOrConsign();
              alert('email was successfully sent');
            });
        }}
      >
        <Row>
          <Label>Name</Label>
          <StyledInput id="name" required />
        </Row>
        <Row>
          <Label>Number</Label>
          <StyledInput id="phone" type="number" required />
        </Row>
        <Row>
          <Label>Email</Label>
          <StyledInput id="email" type="email" required />
        </Row>
        <Row>
          <Label>Comment</Label>
          <StyledTextArea id="writings" required />
        </Row>
        <SubmitButton type="submit" value="send" />
      </StyledForm>
    </ModalWrapper>
  </Wrapper>
);
