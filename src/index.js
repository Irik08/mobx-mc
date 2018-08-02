import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './Counter';

ReactDOM.render(<App counter={new Counter()} />, document.getElementById('root'));
registerServiceWorker();
