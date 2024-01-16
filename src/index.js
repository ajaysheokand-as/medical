import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
=======
import reportWebVitals from './reportWebVitals';
 import { Provider } from 'react-redux';
 import {Store} from "./redux/Store";
>>>>>>> 07394b66247a56532ec77ad7029e1476d45ce3d2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
<<<<<<< HEAD
    
  </React.StrictMode>
=======
  </Provider>
>>>>>>> 07394b66247a56532ec77ad7029e1476d45ce3d2
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

