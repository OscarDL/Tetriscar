import React, { useCallback, useEffect } from 'react';

import { getRandomPiece } from '../../utils';
import { useGameContext } from '../../Context/Game/Provider';
import { useSettingsContext } from '../../Context/Settings/Provider';


const setBoardsize = () => {
  let board;

  while (!board) {
    board = document.getElementById('board');
  }

  board.style.width = board.clientHeight / 2 + 'px';
};


export default function Board() {
  const [{commands}] = useSettingsContext();
  const [{play, board, currentPiece, nextPiece, sidePiece}, gameDispatch] = useGameContext();


  const savePiece = useCallback(() => {
    const piece = sidePiece;
    gameDispatch({ type: 'SET_SIDE_PIECE', sidePiece: currentPiece });

    if (piece) {
      gameDispatch({ type: 'SET_CURRENT_PIECE', currentPiece: piece });
    } else {
      gameDispatch({ type: 'SET_CURRENT_PIECE', currentPiece: nextPiece });
      gameDispatch({ type: 'SET_NEXT_PIECE', nextPiece: getRandomPiece() });
    }

    console.log('piece saved');
  }, [currentPiece, nextPiece, sidePiece, gameDispatch]);

  const placePiece = useCallback(() => {
    gameDispatch({ type: 'SET_CURRENT_PIECE', currentPiece: nextPiece });
    gameDispatch({ type: 'SET_NEXT_PIECE', nextPiece: getRandomPiece() });

    console.log('piece placed');
  }, [nextPiece, gameDispatch]);

  const rotatePiece = useCallback(() => {
    console.log('piece rotated');
  }, []);


  useEffect(() => {
    setBoardsize();
    window.addEventListener('resize', setBoardsize);

    return () => window.removeEventListener('resize', setBoardsize);
  }, []);

  useEffect(() => {
    if (!play) {
      document.body.onkeyup = (e) => {
        // Renew current piece on pressing "Space"
        if (e.code === commands.place.code) {
          placePiece();
        }
        
        // Save current piece on pressing "Enter"
        if (e.code.includes(commands.save.code)) {
          savePiece()
        }
        
        // Rotate current piece on pressing "R"
        if (e.code === commands.rotate.code) {
          rotatePiece()
        }
      }
    }
  }, [play, commands, placePiece, rotatePiece, savePiece]);


  return (
    <div className="board" id="board">
      {board.map((line, i) => (
        <div key={i} className="line">
          {line && line.map((block, j) => (
            <div key={j} className="block" style={{backgroundColor: block ?? 'transparent'}}/>
          ))}
        </div>
      ))}
    </div>
  );
}
