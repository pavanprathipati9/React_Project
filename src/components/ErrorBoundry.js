import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true })
	}


	render() {
		if (this.state.hasError) {
			return <h1>Ooops. That is not good</h1>
		}

		return this.props.children

	}
}

export default ErrorBoundry;

/*
- with react16 we are having new life cycle method that was introduced called componentDidCatch and its kind of try catch block in js
if any thing errors out it will run this lifecycle hook and this get couple of parameters error and info

-with this ErrorBoundry, if anything in the cardlist fails it's going to cach it and display our error message
*/
