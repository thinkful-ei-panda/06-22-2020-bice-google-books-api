import React from  'react';

import './searchbar.css';

export default class SearchBar extends React.Component {

  render () {

    return (
      
        <div className = 'searchbar'>

            <label htmlFor = 'search-input'>Search</label>

            <input type = 'text' className = 'search-input' onChange={e => this.props.queryString(e.target.value)} />

            <button onClick = {e => this.props.searchQuery()}>Search</button>

        </div>

    );

  }

}