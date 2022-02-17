export const gameReducer = (state, action) => {
  // action -> type, [payload]

  switch(action.type) {
    case 'SET_CURRENT_PIECE':
      return {
        ...state,
        currentPiece: action.currentPiece
      };

    case 'SET_SIDE_PIECE':
      return {
        ...state,
        sidePiece: action.sidePiece
      };

    case 'SET_NEXT_PIECE':
      return {
        ...state,
        nextPiece: action.nextPiece
      };

    default: {
      return state;
    }
  }
};
