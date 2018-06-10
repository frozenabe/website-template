import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';

import {
  grey,
  lightGrey,
  darkGrey,
  turquoise,
} from '../../styles/colors';

const Wrapper = styled.div`
  margin: 0 auto;
  background: ${lightGrey};
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  margin: 3.5rem;
  font-weight: 200;
  font-size: 2rem;
  color: ${darkGrey};

  @media (max-width: 874px) {
    margin-bottom: 1.3rem;
    font-size: 1.5rem;
  }
`;

const StyledDiv = styled.div`
  width: 60rem;
  display: flex;
  justify-content: center;

  @media (max-width: 874px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;
  }
`;

const Location = styled.div`
  width: 39%;
  height: 20.5rem;
  border-top-right-radius: 1rem;
  background: ${lightGrey};
  background-image: linear-gradient(to right,rgba(255,255,255,0),#fff);

  @media (max-width: 874px) {
    height: 3.5rem;
    width: 18rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${turquoise};
    background: white;
    border-radius: 3rem;
    background-image: none;
    box-shadow: 0 3px 20px rgba(0,0,0,0.05), 0 3px 20px rgba(0,0,0,0.05); 
  }
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 1rem;
    margin-left: 10rem;
    border: 1px solid ${turquoise};

    &:hover {
      color: white;
      background: ${turquoise};
    }

    @media (max-width: 874px) {
      margin: 0;
    }
  }
`;

const StyledMenu = styled(Menu)`
  && {
    margin-top: 3.5rem;

    @media (max-width: 874px) {
      margin-top: 4rem;
      margin-left: -2.5rem;
    }
  }
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    display: flex;
    justify-content: center;
    width: 10rem;
  }
`;

const StyledP = styled.p`
  margin-left: 7rem;

  @media (max-width: 874px) {
    display: none;
  }
`;

const LocationImg = styled.div`
  width: 35rem;
  height: 15rem;
  margin: 2rem 0 0 3rem;
  background: white;
  border-radius: 2rem;
  box-shadow: 0 3px 20px rgba(0,0,0,0.12), 0 3px 20px rgba(0,0,0,0.13);

  @media (max-width: 874px) {
    width: 80%;
    margin-top: 2.5rem;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const StyledImg = styled.div`
  height: 12rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  color: white;
  font-weight: 800;
  background: ${grey};
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;

  @media (max-width: 874px) {
    font-size: 1.8rem;
  }
`;

const StyledAppBar = styled(AppBar)`
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;

  && {
    background: ${turquoise};
  }
`;

const TabContainer = ({ children }) => (
  <Typography component="div">
    {children}
  </Typography>
);

export default ({
  tab,
  button,
  handleTabsChange,
  handleButtonOpen,
  handleButtonClose,
}) => (
  <Wrapper>
    <Container>
      <StyledH2>Title</StyledH2>
      <StyledDiv>
        <Location>
          <StyledButton
            aria-owns={button ? 'fade-menu' : null}
            aria-haspopup="true"
            onClick={handleButtonOpen}
          >
            Consult
          </StyledButton>
          <StyledMenu
            id="fade-menu"
            anchorEl={button}
            open={Boolean(button)}
            transition={Fade}
          >
            <StyledMenuItem value="1200" onClick={e => handleButtonClose(e)}>12:00</StyledMenuItem>
            <StyledMenuItem value="1300" onClick={e => handleButtonClose(e)}>13:00</StyledMenuItem>
            <StyledMenuItem value="1400" onClick={e => handleButtonClose(e)}>15:00</StyledMenuItem>
            <StyledMenuItem value="0" onClick={e => handleButtonClose(e)}>Maybe Later</StyledMenuItem>
          </StyledMenu>
          <StyledP id="consult-explain">
            Write Something Useful
          </StyledP>
        </Location>
        <LocationImg>
          {tab === 0 && <TabContainer><StyledImg>Div or Image1</StyledImg></TabContainer>}
          {tab === 1 && <TabContainer><StyledImg>Div or Image2</StyledImg></TabContainer>}
          {tab === 2 && <TabContainer><StyledImg>Div or Image3</StyledImg></TabContainer>}
          <StyledAppBar position="static">
            <Tabs
              value={tab}
              onChange={handleTabsChange}
              centered
            >
              <Tab label="One" />
              <Tab label="Two" />
              <Tab label="Three" />
            </Tabs>
          </StyledAppBar>
        </LocationImg>
      </StyledDiv>
    </Container>
  </Wrapper>
);
