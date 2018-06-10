import styled from 'styled-components';

import { grey, darkGrey } from '../../styles/colors';
import ContentsInfo from './contentsInfo';
import ToQnA from '../../components/toQnA';

const Wrapper = styled.div`
  background: ${darkGrey};
`;

const GetChrome = styled.span`
  display: none;
  position: fixed;
  bottom: 0;
  left: 1rem;
  font-size: 1.1rem;
  color: red;
`;

const ChromeIsBetter = styled(GetChrome)`
  color: green;
`;

const BottomFooter = styled.footer`
  height: 7vh;
  width: 93%;
  margin: 0 auto;
  min-height: 3.3rem;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${grey};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.span`
  min-width: 20rem;
  margin-left: 0.1rem;
  font-size: 0.8rem;
  color: ${grey};
`;

export default ({ isFirst, isQnA }) => (
  <Wrapper>
    <GetChrome id="get-chrome">Chrome Browswer을 다운로드해서 사용해주세요.</GetChrome>
    <ChromeIsBetter id="chrome-is-better">본 사이트는 Chrome에 최적화 되어있습니다.</ChromeIsBetter>
    {isFirst && <ContentsInfo />}
    <BottomFooter>
      <Container>
        <Copyright>
          MadeBy Abe
        </Copyright>
      </Container>
      {!isQnA && <ToQnA />}
    </BottomFooter>
  </Wrapper>
);
