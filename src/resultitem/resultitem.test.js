import React from 'react';

import ReactDOM from 'react-dom';

import ResultItem from './resultitem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});