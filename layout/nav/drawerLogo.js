import styled from 'styled-components';

import Logo from './logo';
import Hamburger from './hamburger';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ({ handleDrawer }) => (
  <Wrapper>
    <Logo />
    <Hamburger handleDrawer={handleDrawer} />
  </Wrapper>
);
