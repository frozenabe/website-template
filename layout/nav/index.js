import { Component } from 'react';
import styled from 'styled-components';

import { navHeight, containerWidth } from '../../styles/layout';
import Hamburger from './hamburger';
import ToTop from '../../components/toTop';
import Buy from './buy';
import Drawer from './drawer';

const Wrapper = styled.div`
  height: ${navHeight};
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ isOnTop }) => (isOnTop ? 'none' : '1px solid #d4d5d7')};;
  background-color: ${({ isOnTop }) => (isOnTop ? 'transparent' : 'white')};
  z-index: 100;
  transition: transform 300ms;

  &:hover {
    background-color: white;
  }
`;

const Container = styled.div`
  width: ${containerWidth};
  display: flex;
  align-items: center;
`;

const LogContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Nav extends Component {
  state = {
    isOnTop: true,
    sticky: false,
  }

  componentDidMount() {
    document.documentElement.style.overflowY = 'visible';
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const y = window.pageYOffset;
    if (y > 25) {
      document.getElementById('to-top').style.bottom = '0.5rem';
      this.setState({
        isOnTop: false,
        sticky: true,
      });
    } else if (y < 30) {
      document.getElementById('to-top').style.bottom = '-4rem';
      this.setState({
        isOnTop: true,
        sticky: false,
      });
    }

    return null;
  }

  handleDrawer = () => {
    document.getElementsByClassName('drawerList')[0].classList.toggle('show');
    document.getElementsByClassName('darkBackground')[0].classList.toggle('view');
    document.documentElement.style.overflowY = document.documentElement.style.overflowY === 'hidden' ? 'visible' : 'hidden';
  }

  handleMouseEnter = () => {
    this.setState({
      sticky: true,
    });
  }

  handleMouseLeave = () => {
    const y = window.pageYOffset;
    if (y < 30) {
      this.setState({
        sticky: false,
      });
    }
  }

  render() {
    const { isOnTop, sticky } = this.state;
    const { isFirst } = this.props;
    return (
      <Wrapper
        id="to-nav"
        isOnTop={isOnTop}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Container>
          <Drawer
            handleDrawer={this.handleDrawer}
            isFirst={isFirst}
            sticky={sticky}
          />
          <LogContainer>
            <Buy sticky={sticky} isFirst={isFirst} />
          </LogContainer>
          <ToTop />
        </Container>
        <Hamburger handleDrawer={this.handleDrawer} />
      </Wrapper>
    );
  }
}

export default Nav;
