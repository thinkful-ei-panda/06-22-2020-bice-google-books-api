import React from 'react';

import ReactDOM from 'react-dom';

import FilterBookType from './filterbooktype';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterBookType />, div);
  ReactDOM.unmountComponentAtNode(div);
});