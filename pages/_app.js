import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';

import secureRedux from '../redux/secureRedux';
import { isChrome } from '../components/checkBrowser';

if (process.browser && !isChrome) {
  smoothscroll.polyfill();
}

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default secureRedux(MyApp);
