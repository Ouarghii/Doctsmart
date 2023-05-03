import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/ContextProvider/Context';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './redux/features/store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} >
     <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
  
);
reportWebVitals();
