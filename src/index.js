import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import { appReducer } from './Context/reducer';
import { AppProvider } from './Context/Provider';


ReactDOM.render(
  <React.StrictMode>
    <AppProvider reducer={appReducer}>
      <App/>
    </AppProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
