import styled from 'styled-components';

import { grey, darkGrey } from '../../styles/colors';

const Wrapper = styled.div`
  background: ${darkGrey};
`;

const ContentsInfo = styled.div`
  height: 6rem;
  margin-left: 1rem;
  padding: 15px 30px;
  font-size: 0.8rem;
  color: ${grey};
  border: none;
`;

export default () => (
  <Wrapper>
    <ContentsInfo>
      Write Something Useful
    </ContentsInfo>
  </Wrapper>
);
