import React from 'react';

import './resultitem.css';

export default class ResultItem extends React.Component {
	
	render () {
		
		// The price is tricky to pin down... unfinished
		// const price = this.props.item.saleInfo.listPrice.amount 
		// 	? <div>${ this.props.item.saleInfo.listPrice }</div>
		// 	: <div>Not for sale</div>

		return (
		
			<div className = 'result-item'>

				<div><h4>{ this.props.item.volumeInfo.title }</h4></div>
								
				<div>{ this.props.item.volumeInfo.authors }</div>

				<div>Price unavailable</div>

				<div>{ this.props.item.volumeInfo.description }</div>

			</div>

		);

	}

}