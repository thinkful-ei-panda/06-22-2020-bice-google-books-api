import React from 'react';

import SearchBar from './searchbar/searchbar';

import FilterBookType from './filterbooktype/filterbooktype';

import FilterPrintType from './filterprinttype/filterprinttype';

import './App.css';
import ResultList from './resultlist/resultlist';

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			url: 'https://www.googleapis.com/books/v1/volumes?',
			key: 'AIzaSyA64mcctC0W3y02ptZwYno6vvuprJ8986M',
			query: '',
			printType: 'All',
			bookType: '',
			maxResults: 40,
			items: []
		};
	}

	searchQuery () {

		const bookType = () => {

			if ( this.state.bookType !== '' ) return `&filter=${this.state.bookType}`; 

			else return '';

		}

		let url = `
			${this.state.url}
			${this.state.query}
			&printType=${this.state.printType}
			${bookType ()}
			&maxResults=${this.state.maxResults}
			&key=${this.state.key}
		`;
		
		const options = { method: 'GET' };

		fetch( url, options )

			.then ( res => {

				if ( !res.ok ) {

					throw new Error ( 'Something went wrong, please try again later' );
				}

				return res.json ();
			})

			.then ( data => {
				
				this.setState({
					
					items: [...data.items]

				});

			})

			.catch ( err => {
				
				// this.setState({
				//   error: err.message
				// });
				console.log ('error occured');

			});
		
	}

	queryString ( qStr ) {

		this.setState ({
	
		  query: `q=${qStr}`,
	
		});
	
	}

	filterBookType ( qStr ) {

		if ( qStr === '...' ) qStr = '';

		this.setState ({ bookType: qStr });
	
	}

	filterPrintType ( qStr ) {

		this.setState ({ printType: qStr });
	
	}

	render () {
			
		return (

			<div className = 'App'>

				<header className = 'App-header'>
					
					<h1>Google Book Search</h1>

					<SearchBar queryString = {query => this.queryString(query)} searchQuery = {() => this.searchQuery()}/>
				
					<div className = 'filterbar'>

						<FilterPrintType filterPrintType = {printType => this.filterPrintType(printType)}/>

						<FilterBookType filterBookType = {bookType => this.filterBookType(bookType)}/>

					</div>
					
				</header>

				<ResultList results = { this.state.items }/>

			</div>

		);
	
	}

}