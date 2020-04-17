import React,{Component} from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBoxer from './Searchboxer';


class App extends Component{
	constructor()
	{
	 super();
	this.state={
	
	robots: robots,
	searchfield:''
               
               }
	
	}
	onSearchChange=(event)=>
	{
		this.setState({searchfield: event.target.value});
		/*onst filteredRobots=this.state.robots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
		console.log(filteredRobots);*/
	}
   render()
   { const filteredRobots=this.state.robots.filter(robot => {return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());})
		console.log(filteredRobots);
   	return (
	<div className='tc'>
     <h1>RoboFriends</h1>
     <SearchBoxer searchChange={this.onSearchChange} />

	<CardList robots={filteredRobots}/>
	</div>
	);
}

};
export default App;