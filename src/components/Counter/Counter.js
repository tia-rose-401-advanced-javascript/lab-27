/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';

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
			<div className='counter'>
				<h4 className='count' style={color}>{this.state.counter}</h4>
				<a href="*" className='increment' onClick={this.handleButtonClick}>
					Going up
				</a>
				<a href="*" className='decrement' onClick={this.handleDecrementClick}>
					Going down
				</a>
			</div>
	  );
	}
}

export default Counter;
