import React from 'react';
import ReactDom from 'react-dom';
import Interlink from './Interlink';
import App from './App';
import {BrowserRouter}from 'react-router-dom'
import './index.css';
ReactDom.render(
<BrowserRouter>
<Interlink />
</BrowserRouter>, document.getElementById('root'))