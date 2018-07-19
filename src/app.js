import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import CalculateDashboard from './components/_CalculateDashboard';
import './styles/styles.scss';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <CalculateDashboard />
    </Provider>
)

ReactDom.render(jsx, document.getElementById('app'));


