import styled from 'styled-components';
import Button from 'material-ui/Button';

import { brightTurquoise } from '../../styles/colors';
import { navHeight } from '../../styles/layout';
import DrawerLogo from './drawerLogo';
import Logo from './logo';

const DrawerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const Drawer = styled.div`
  right: 0em;

  .show {
    right: 0;
    transition: .25s ease-in-out;
    z-index: 5;
  }

  .view {
    display: flex;
    z-index: 1;
  }
`;

const LogoContainer = styled.div`
  height: ${navHeight};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const DrawerList = styled.div`
  height: 100%;
  width: 13rem;
  top: 0;
  right: -20rem;
  position: fixed;
  background: rgb(238, 238, 238);
  transition: .25s ease-in-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 90%;
  height: 10rem;
  && {
    font-size: 1.4rem;
    font-weight: 300;

    &:hover {
      background: ${brightTurquoise};
      color: white;
    }
  }
`;

const StyledP = styled.p`
  width: 85%;
  font-size: 0.9rem;
  margin-top: 3rem;
`;

const DarkBackground = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
  background: rgba(0, 0, 0, 0.5);
`;

export default ({ handleDrawer, isFirst, sticky }) => (
  <DrawerContainer className="NavContainer">
    <Logo isFirst={isFirst} sticky={sticky} />
    <Drawer>
      <DrawerList className="drawerList">
        <LogoContainer>
          <DrawerLogo handleDrawer={handleDrawer} />
        </LogoContainer>
        <ButtonContainer>
          <StyledButton
            color="default"
            href="/"
            variant="raised"
          >
            Button
          </StyledButton>
          <StyledP>Write Something Useful</StyledP>
        </ButtonContainer>
      </DrawerList>
      <DarkBackground className="darkBackground" onClick={handleDrawer} />
    </Drawer>
  </DrawerContainer>
);
