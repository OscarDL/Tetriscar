import React, { createContext, useContext, useReducer } from 'react';

import { createNewBoard, getRandomPiece } from '../../utils';


const gameState = {
  play: false,
  board: createNewBoard(),

  score: 0,
  combo: {
    best: 0,
    current: 0
  },

  rotation: 0,
  position: [0, 0],
  savedPiece: null,
  nextPiece: getRandomPiece(),
  currentPiece: getRandomPiece()
};

const GameContext = createContext();
export const GameProvider = ({ reducer, children }) => (
  <GameContext.Provider value={useReducer(reducer, gameState)}>
    {children}
  </GameContext.Provider>
);

export const useGameContext = () => useContext(GameContext);
