import React from  'react';

import './filterbooktype.css';

export default class FilterBookType extends React.Component {

  render () {

    return (
      
        <div className = 'book-type-select-container'>

			<label htmlFor = 'book-type-select'>Book Type</label>

			<select className = 'book-type-select'  onChange={e => this.props.filterBookType(e.target.value)}>
				<option>...</option>
				<option>Partial</option>
				<option>Full</option>
				<option>free-ebooks</option>
				<option>paid-ebooks</option>
			</select>

		</div>

    );

  }

}