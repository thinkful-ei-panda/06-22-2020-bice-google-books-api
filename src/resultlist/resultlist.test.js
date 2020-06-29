import React from 'react';

import ReactDOM from 'react-dom';

import ResultList from './resultlist';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultList />, div);
  ReactDOM.unmountComponentAtNode(div);
});