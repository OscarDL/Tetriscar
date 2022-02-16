export const appReducer = (state, action) => {
  // action -> type, [payload]

  switch(action.type) {
    case 'SET_COMMAND':
      return {
        ...state,
        commands: {
          ...state.commands,
          [action.command.type]: {
            name: action.command.name,
            code: action.command.code
          }
        }
      };

    case 'SET_CURRENT_PIECE':
      return {
        ...state,
        game: {
          ...state.game,
          currentPiece: action.currentPiece
        }
      };

    case 'SET_SIDE_PIECE':
      return {
        ...state,
        game: {
          ...state.game,
          sidePiece: action.sidePiece
        }
      };

    default: {
      return state;
    }
  }
};
