import React, { createContext, useContext, useReducer } from 'react';


const settingsState = {
  commands: {
    save: {
      name: 'Enter',
      code: 'Enter'
    },
    place: {
      name: 'Space',
      code: 'Space'
    },
    rotate: {
      name: 'R',
      code: 'KeyR'
    },
    down: {
      name: 'Down',
      code: 'ArrowDown'
    },
    left: {
      name: 'Left',
      code: 'ArrowLeft'
    },
    right: {
      name: 'Right',
      code: 'ArrowRight'
    }
  }
};

const SettingsContext = createContext();
export const SettingsProvider = ({ reducer, children }) => (
  <SettingsContext.Provider value={useReducer(reducer, settingsState)}>
    {children}
  </SettingsContext.Provider>
);

export const useSettingsContext = () => useContext(SettingsContext);
