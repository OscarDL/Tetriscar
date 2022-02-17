import React, { createContext, useContext, useReducer } from 'react';

import { createNewBoard, getRandomPiece } from '../../utils';


const gameState = {
  play: false,
  board: createNewBoard(),
  
  rotation: 0,
  sidePiece: null,
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
