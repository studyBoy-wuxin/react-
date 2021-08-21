import React from 'react';
import ReactDOM from 'react-dom';
import Index from './App2';
import 'antd/dist/antd.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Index />
    </BrowserRouter>,
  document.getElementById('root')
);
