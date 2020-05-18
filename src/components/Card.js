import React from 'react';//importing react to understand jsx,div to div

const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div> 
		</div>

		);
}

export default Card;

/*
1.receiving props and destructing props right inside brackets-line 3*/