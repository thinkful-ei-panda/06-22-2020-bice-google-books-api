import React from 'react';

import ResultItem from '../resultitem/resultitem';

import './resultlist.css';

export default class ResultList extends React.Component {
	
	render () {
		
		return (
		
			<main>
				
				{ this.props.results.map ( item => ( 
						
					<ResultItem key = { item.id } item = { item }/>
				
				) ) }	

			</main>

		);

	}

}
