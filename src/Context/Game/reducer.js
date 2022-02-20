export const gameReducer = (state, action) => {
  // action -> type, [payload]

  switch(action.type) {
    case 'SET_PLAY':
      return {
        ...state,
        play: action.play
      };


    case 'SET_BOARD':
      return {
        ...state,
        board: action.board
      };


    case 'SET_CURRENT_PIECE':
      return {
        ...state,
        currentPiece: action.currentPiece
      };

    case 'SET_SAVED_PIECE':
      return {
        ...state,
        savedPiece: action.savedPiece
      };

    case 'SET_NEXT_PIECE':
      return {
        ...state,
        nextPiece: action.nextPiece
      };

    case 'SET_POSITION':
      return {
        ...state,
        position: action.position
      };


    case 'SET_SCORE':
      return {
        ...state,
        score: action.score
      };


    case 'SET_CURRENT_COMBO':
      return {
        ...state,
        combo: {
          ...state.combo,
          current: action.current
        }
      };

    case 'SET_BEST_COMBO':
      return {
        ...state,
        combo: {
          ...state.combo,
          best: action.best
        }
      };

    default: {
      return state;
    }
  }
};
