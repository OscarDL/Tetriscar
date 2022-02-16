import React, { useEffect } from 'react';

import { pieceTypes } from '../../utils';
import { useAppContext } from '../../Context/Provider';


export default function Board() {
  const [{game}, dispatch] = useAppContext();
  const currentPiece = game.currentPiece;


  useEffect(() => {
    if (!currentPiece) {
      const randomPiece = pieceTypes[~~(Math.random() * pieceTypes.length)];
      dispatch({ type: 'SET_CURRENT_PIECE', currentPiece: randomPiece });

      // Renew current piece on pressing "Space", TODO: place the piece on the board
      document.body.onkeyup = (e) => e.code === 'Space' && (
        dispatch({ type: 'SET_CURRENT_PIECE', currentPiece: null })
      );
    }
  }, [currentPiece, dispatch]);


  return (
    <div className="board">
      
    </div>
  );
}
