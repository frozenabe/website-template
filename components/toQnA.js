import Link from 'next/link';
import styled from 'styled-components';

import { darkGrey } from '../styles/colors';

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0.6rem;
  right: 0;
  width: 5rem;
  text-align: center;
  margin-right: 4rem;
  padding: 0.5rem 0.7rem;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  border-radius: 2rem;
  background: ${darkGrey};
  cursor: pointer;
  transition: all 0.5s ease-out;
`;

export default () => (
  <Link href="/qnaBoard" prefetch>
    <StyledDiv>Q & A</StyledDiv>
  </Link>
);
