import React, { useEffect } from 'react';

import { useGameContext } from '../../Context/Game/Provider';
import { useSettingsContext } from '../../Context/Settings/Provider';
import { getNewPiecePos, placePiece, savePiece, updateBoard, updatePosition } from '../../utils';


const setBoardSize = () => {
  let board;

  while (!board) {
    board = document.getElementById('board');
  };

  board.style.width = board.clientHeight / 2 + 'px';
};

const startGame = (board, currentPiece, dispatch) => {
  const initialPos = getNewPiecePos(currentPiece);

  dispatch({ type: 'SET_PLAY', play: true });
  dispatch({ type: 'SET_POSITION', position: initialPos });
  dispatch({ type: 'SET_BOARD', board: updateBoard(board, currentPiece, initialPos) });
};


export default function Board() {
  const [{commands}] = useSettingsContext();
  const [{board, currentPiece, nextPiece, play, position, savedPiece}, gameDispatch] = useGameContext();


  useEffect(() => {
    setBoardSize();
    window.addEventListener('resize', setBoardSize);

    return () => window.removeEventListener('resize', setBoardSize);
  }, [play]);

  useEffect(() => {
    const handleEvents = (e) => {
      if (play) {
        // Renew current piece on pressing "Space"
        if (e.code === commands.place.code) {
          const h = 0;
          const w = 0;
          placePiece(board, currentPiece, nextPiece, [h, w], gameDispatch);
        }
        // Save current piece on pressing "Enter"
        if (e.code.includes(commands.save.code)) {
          console.log()
          savePiece(currentPiece, nextPiece, savedPiece, gameDispatch);
        }
        // Rotate current piece on pressing "R"
        if (e.code === commands.rotate.code) {
          // TODO: Rotate piece
          console.log('Rotate piece');
        }

        if (e.code === commands.left.code) {
          updatePosition('left', board, currentPiece, nextPiece, position, gameDispatch);
        }
        if (e.code === commands.right.code) {
          updatePosition('right', board, currentPiece, nextPiece, position, gameDispatch);
        }
        if (e.code === commands.down.code) {
          updatePosition('down', board, currentPiece, nextPiece, position, gameDispatch);
        } 
      }

      else {
        if (e.code.includes(commands.save.code)) {
          startGame(board, currentPiece, gameDispatch);
        }
      }
    };

    window.addEventListener('keydown', handleEvents);

    return () => window.removeEventListener('keydown', handleEvents);
  }, [board, commands, currentPiece, nextPiece, play, position, savedPiece, gameDispatch]);


  return (
    <div className="board" id="board">
      {board.map((line, i) => (
        <div key={i} className="line">
          {line && line.map((block, j) => (
            <div key={j} className="block" style={{backgroundColor: block ?? 'transparent'}}/>
          ))}
        </div>
      ))}

      {play ? null : (
        <div className="play-overlay">
          <div className="play-text">
            PRESS <span style={{color: 'gold'}}>ENTER</span> TO<br/>START THE GAME
          </div>
        </div>
      )}
    </div>
  );
}
