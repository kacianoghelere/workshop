import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const MyComponent = (props) => {
  return React.createElement('div', null, `${props.title}`);
};

ReactDOM.render(
  React.createElement(MyComponent, {title: 'Teste'}, null),
  document.getElementById('root')
);

registerServiceWorker();
