/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';
import './app.scss';


class App extends React.Component {
  render() {
    return (
			<React.Fragment>
				<Header />
				<Counter />
				<Footer />
			</React.Fragment>
    );
  }
}

export default App;
