export const settingsReducer = (state, action) => {
  // action -> type, [payload]

  switch(action.type) {
    case 'SET_COMMAND': {
      const newCommand = {
        name: action.command.name,
        code: action.command.code
      };

      return {
        ...state,
        commands: {
          ...state.commands,
          [action.command.type]: newCommand
        }
      };
    };

    default: {
      return state;
    }
  }
};
