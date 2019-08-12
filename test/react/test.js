import React from 'react';
import ReactDOM from 'react-dom';

import Simple from './components/simple';
import Pure from './components/pure';

ReactDOM.render(<Simple />, document.querySelector('#main'));
ReactDOM.render(<Pure />, document.querySelector('#main'));
