/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './app.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

	handleButtonClick = (e) => {
	  e.preventDefault();
	  this.setState({ counter: this.state.counter + 1 });
	};

	handleDecrementClick = (e) => {
	  e.preventDefault();
	  this.setState({ counter: this.state.counter - 1 });
	};

	render() {
	  // eslint-disable-next-line prefer-destructuring
	  const counter = this.state.counter;
	  let color;
	  const colorIncrement = { color: 'bisque' };
	  const colorDecrement = { color: 'lightpink' };
	  if (counter > 0) {
	    color = colorIncrement;
	  } else if (counter < 0) {
	    color = colorDecrement;
	  }


	  return (
			<div>
				<h4 style={color}>{this.state.counter}</h4>
				<a href="*" onClick={this.handleButtonClick}>
					Going up
				</a>
				<a href="*" onClick={this.handleDecrementClick}>
					Going down
				</a>
			</div>
	  );
	}
}

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
