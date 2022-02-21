export const pieceTypes = ['L', 'J', 'I', 'T', 'O', 'S', 'Z'];


export const getPiece = (type) => {
  switch (type) {
    case 'L':
      return [
        [null, null, 'orange'],
        ['orange', 'orange', 'orange']
      ];

    case 'J':
      return [
        ['cornflowerblue', null, null],
        ['cornflowerblue', 'cornflowerblue', 'cornflowerblue']
      ];

    case 'I':
      return [
        ['turquoise', 'turquoise', 'turquoise', 'turquoise']
      ];

    case 'O':
      return [
        ['yellow', 'yellow'],
        ['yellow', 'yellow']
      ];

    case 'T':
      return [
        [null, 'orchid', null],
        ['orchid', 'orchid', 'orchid']
      ];

    case 'S':
      return [
        [null, 'limegreen', 'limegreen'],
        ['limegreen', 'limegreen', null]
      ];

    case 'Z':
      return [
        ['red', 'red', null],
        [null, 'red', 'red']
      ];

    default: return [];
  };
};

export const drawPiece = (piece) => {
  if (!piece) return null;

  return (
    <div className="piece">
      {piece.map((line, i) => (
        <div key={i} className="line">
          {line && line.map((block, j) => (
            <div key={j} className="block" style={{backgroundColor: block ?? 'transparent'}}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export const getRandomPiece = () => (
  getPiece(pieceTypes[~~(Math.random() * pieceTypes.length)])
);

export const getNewPiecePos = (piece) => (
  [0, ~~((10 - piece[0].length) / 2)]
);


export const createNewBoard = () => (
  [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null]
  ]
);


export const savePiece = (currentPiece, nextPiece, savedPiece, dispatch) => {
  dispatch({ type: 'SET_SAVED_PIECE', savedPiece: currentPiece });

  if (savedPiece) {
    dispatch({ type: 'SET_CURRENT_PIECE', currentPiece: savedPiece });
  } else {
    dispatch({ type: 'SET_CURRENT_PIECE', currentPiece: nextPiece });
    dispatch({ type: 'SET_NEXT_PIECE', nextPiece: getRandomPiece() });
  }
};

export const placePiece = (board, currentPiece, nextPiece, position, dispatch) => {
  const newPosition = getNewPiecePos(nextPiece);

  dispatch({ type: 'SET_CURRENT_PIECE', currentPiece: nextPiece });
  dispatch({ type: 'SET_NEXT_PIECE', nextPiece: getRandomPiece() });
  dispatch({ type: 'SET_POSITION', position: newPosition });
  
  const newBoard = updateBoard(board, currentPiece, position);
  dispatch({ type: 'SET_BOARD', board: newBoard });
};

export const rotatePiece = (piece, rotation, dispatch) => {
  // Rotate piece
};


export const updatePosition = (type, board, currentPiece, nextPiece, position, dispatch) => {
  switch (type) {
    case 'left': {
      const [h, w] = position;

      const canMoveLeft = currentPiece.every((line, i) => {
        const firstBlock = line.findIndex(block => block !== null);
        return board[h + i][w + firstBlock - 1] === null;
      });

      if (canMoveLeft) {
        const newPosition = [h, w - 1];
        dispatch({ type: 'SET_POSITION', position: newPosition });
        dispatch({ type: 'SET_BOARD', board: updateBoard(board, currentPiece, newPosition, position) });
      }

      break;
    };

    case 'right': {
      const [h, w] = position;

      const canMoveRight = currentPiece.every((line, i) => {
        // ".slice()" duplicates the line array to avoid mutating it with ".reverse()"
        const lastBlock = line.slice().reverse().findIndex(block => block !== null);
        return board[h + i][w + currentPiece[i].length - lastBlock] === null;
      });

      if (canMoveRight) {
        const newPosition = [h, w + 1];
        dispatch({ type: 'SET_POSITION', position: newPosition });
        dispatch({ type: 'SET_BOARD', board: updateBoard(board, currentPiece, newPosition, position) });
      }

      break;
    };

    case 'down': {
      const [h, w] = position;
      const hPos = h + currentPiece.length - 1;
      const lastPieceLine = currentPiece[currentPiece.length - 1];

      const sliceUnderPiece = board[hPos + 1]?.slice(w, w + lastPieceLine.length);
      const canMoveDown = sliceUnderPiece?.every((block, i) => !block || !lastPieceLine[i]) ?? false;

      if (canMoveDown) {
        const newPosition = [h + 1, w];
        dispatch({ type: 'SET_POSITION', position: newPosition });
        dispatch({ type: 'SET_BOARD', board: updateBoard(board, currentPiece, newPosition, position) });
      } else {
        placePiece(board, currentPiece, nextPiece, position, dispatch);
      }

      break;
    };

    default:
      break;
  }
};


export const updateBoard = (board, piece, newPos, oldPos) => {
  const newBoard = JSON.parse(JSON.stringify(board));

  if (oldPos) {
    // Clean old position on the board
    for (let i = 0; i < piece.length; i += 1) {
      for (let j = 0; j < piece[i].length; j += 1) {
        const [h, w] = oldPos;

        if (newBoard[i + h][j + w] === piece[i][j]) {
          newBoard[i + h][j + w] = null;
        }
      }
    };
  }

  // Draw at new position on the board
  for (let i = 0; i < piece.length; i += 1) {
    for (let j = 0; j < piece[i].length; j += 1) {
      const [h, w] = newPos;

      if (piece[i][j]) {
        newBoard[i + h][j + w] = piece[i][j];
      }
    }
  };

  return newBoard;
};
