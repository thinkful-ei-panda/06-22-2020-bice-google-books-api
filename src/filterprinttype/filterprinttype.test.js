import React from 'react';

import ReactDOM from 'react-dom';

import FilterPrintType from './filterprinttype';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterPrintType />, div);
  ReactDOM.unmountComponentAtNode(div);
});