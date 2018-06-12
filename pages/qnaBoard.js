import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { containerWidth } from '../styles/layout';
import { darkGrey } from '../styles/colors';
import Layout from '../layout';
import QnA from '../components/qnaBoard';
import { changeUserInfo } from '../redux/actions/user';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperContainer = styled.div`
  height: 7rem;
  width: 100%;
  margin: 8vh auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${darkGrey};
`;

const IntroText = styled.h2`
  margin: 0.5rem;
  font-size: 4rem;
  font-weight: 800;
  color: white;

  @media (max-width: 40rem) {
    font-size: 3rem;
  }
`;

const LowerContainer = styled.div`
  width: ${containerWidth};
  position: relative;
  margin: 0 auto;
  flex: 1;
`;

class QnABoard extends Component {
  static async getInitialProps({ reduxStore }) {
    reduxStore.dispatch(changeUserInfo([]));
    return {};
  }

  render() {
    return (
      <Layout isQnA>
        <Wrapper>
          <UpperContainer>
            <IntroText>
              Q & A
            </IntroText>
          </UpperContainer>
          <LowerContainer>
            <QnA />
          </LowerContainer>
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(QnABoard);
