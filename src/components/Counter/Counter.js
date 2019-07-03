/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React from 'react';


/**
 * The Counter class that extended from react's component class
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /** Initial state starts at 0 */
      counter: 0,
    };
  }

  /**
 * Handles incrementing, adds 1 to counter everytime it is clicked
 */
	handleIncrementClick = (e) => {
	  e.preventDefault();
	  this.setState({ counter: this.state.counter + 1 });
	};

	/**
	 * Handles decrementing, subtracts 1 to counter everytime it is clicked
	 */
	handleDecrementClick = (e) => {
	  e.preventDefault();
	  this.setState({ counter: this.state.counter - 1 });
	};

	// eslint-disable-next-line max-len
	
	/**
	 * Renders number to DOM, if less than 0 font color will be lightpink.
	 * Greater than 0 font color is bisque
	 */
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
				<h4 className='count' style={color}>{counter}</h4>
				<a href="*" className='increment' onClick={this.handleIncrementClick}>
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
