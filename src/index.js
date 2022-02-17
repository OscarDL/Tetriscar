import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import { gameReducer } from './Context/Game/reducer';
import { GameProvider } from './Context/Game/Provider';
import { settingsReducer } from './Context/Settings/reducer';
import { SettingsProvider } from './Context/Settings/Provider';


ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider reducer={settingsReducer}>
      <GameProvider reducer={gameReducer}>
        <App/>
      </GameProvider>
    </SettingsProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
