import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot( document.getElementById('root') , HTMLElement ); 
root.render( <React.StrictMode>
              <BrowserRouter>
              <App/>
              </BrowserRouter>
             </React.StrictMode> );
reportWebVitals();