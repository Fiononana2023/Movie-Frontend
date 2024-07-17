import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// axios.defaults.baseURL = process.env.REACT_APP_API_URL
 
// axios.interceptors.request.use(function (config) {
//   config.headers['X-Binarybox-Api-Key'] = process.env.REACT_APP_API_KEY;
//   return config;
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
