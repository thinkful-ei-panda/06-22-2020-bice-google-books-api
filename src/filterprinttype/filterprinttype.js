import React from  'react';

import './filterprinttype.css';

export default class FilterPrintType extends React.Component {

  render () {

    return (
      
        <div className = 'print-type-select-container'>

		    <label htmlFor = 'print-type-select'>Print Type</label>

			<select className = 'print-type-select' onChange={e => this.props.filterPrintType(e.target.value)}>
	
			    <option>All</option>
				<option>Books</option>
				<option>Magazines</option>
	
			</select>
						
		</div>

    );

  }

}