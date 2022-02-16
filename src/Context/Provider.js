import React, { createContext, useContext, useReducer } from 'react';


const appState = {
  game: {
    play: false,
    sidePiece: null,
    nextPiece: null,
    currentPiece: null,
    currentPieceRotation: 0,
    board: [null, null, null, null, null, null, null, null, null, null]
  },

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

const AppContext = createContext();
export const AppProvider = ({ reducer, children }) => (
  <AppContext.Provider value={useReducer(reducer, appState)}>
    {children}
  </AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);
