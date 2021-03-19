import React from 'react';
import ReactDom from 'react-dom';
import Interlink from './Interlink';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { StateProvider } from './StateProvider';
import { initialState, reducer } from './reducer';
ReactDom.render(
    <BrowserRouter>
        <StateProvider initialState={initialState} reducer={reducer}>
            <Interlink />
        </StateProvider>
    </BrowserRouter>, document.getElementById('root'))