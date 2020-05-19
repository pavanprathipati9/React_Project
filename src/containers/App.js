import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>{this.setState({ robots: users })});		
	}

	onSearchChange = (event) => { //everytime input changes with DOM we get an event
		this.setState({ searchfield: event.target.value })		
	}


	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());//comparing includes with robots.name
		})
		return !robots.length?
			<h1>Loading</h1> :
		 (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
			);
		
	}
}

export default App;

/*
-Render props refers to a technique for sharing code between react components using a prop whose value is a function
-we need SearchBox and carlist should communicate and also cahnge and update accordingly
-state is an Object, an object that describes your application
-state which describes our application is the robots, and whatever's entered in SearchBox
-state is able to change value of SearchBox, the value of input we're able to change what robots get displayed
-So parent feed 'state' into a child component and as soon as child component recieves a state
-state is a property, that child naver change the property. the parent just tells it what the state
-this state is something that can change and effect our app and they usually live in parent component,
 that pass state to different compnenets 
-CardList accept robots as props
-app owns state that includes robots and it allowed to change
-because of an object use this.
//passed searchchange to searchbox*/