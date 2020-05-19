import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>{
	
	return (
		<div>
		{
 			robots.map((user, i)=>{
			return (
			 <Card
			 	key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
				/>
				);
			})
 		}
 		</div>

		);
}

export default CardList;

/*
-map is used to return multiple components
-receiving robots properties and destructing props right inside brackets-line -4
-6th line states its passing id, name, email to Card.js
-{robots} it is property, getting access to that file
-with in robots when we map,,we get all elements one by one-we can say user 
-map should return
-when we have a loop, we have to give it a unique key
-div to div: its a jsx format
-read the props that it recieves and it just renders something
-robots are pure functions that they recieve something and return something,,props never change*/


