import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
