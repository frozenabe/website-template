import { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../layout';
import Headline from '../components/home/headline';
import Items from '../components/home/items';
import CurrentStats from '../components/home/currentStats';
import OurServices from '../components/home/ourServices';
import OurMembers from '../components/home/ourMembers';
import ContactUs from '../components/home/contactUs';
import Consult from '../components/home/consult';
import { changeSample } from '../redux/actions/sample';
import {
  isIE,
  isEdge,
  isFirefox,
  isOpera,
  isSafari,
} from '../components/checkBrowser';

class Main extends Component {
  state = {
    tab: 0,
    button: null,
  }

  componentDidMount() {
    const { _changeSample } = this.props;
    _changeSample([]);
    if (isIE || isEdge || isOpera) {
      document.getElementById('get-chrome').style.display = 'block';
    } else if (isFirefox || isSafari) {
      document.getElementById('chrome-is-better').style.display = 'block';
    }
  }

  handleTabsChange = (event, tab) => this.setState({ tab });

  handleButtonOpen = event => this.setState({ button: event.currentTarget });

  handleButtonClose = (event) => {
    const { value } = event.target;
    if (value !== 0) {
      const readableHour = value.toString().slice(0, 2);
      const readableMinute = value.toString().slice(2);
      document.getElementById('sales-modal').classList.toggle('view');
      document.getElementById('writings').value = `I would like to make a reservation at ${readableHour}: ${readableMinute}.`;
    }
    this.setState({
      button: null,
    });
  }

  render() {
    const { tab, button } = this.state;
    return (
      <Layout isFirst>
        <Headline />
        <Items />
        <CurrentStats />
        <OurServices />
        <OurMembers />
        <Consult
          tab={tab}
          button={button}
          handleTabsChange={this.handleTabsChange}
          handleButtonOpen={this.handleButtonOpen}
          handleButtonClose={this.handleButtonClose}
        />
        <ContactUs />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  _changeSample: sample => dispatch(changeSample(sample)),
});

export default connect(null, mapDispatchToProps)(Main);
