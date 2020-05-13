import {
  MenuState,
  EXPAND_MENU,
  COLLAPSE_MENU,
  MenuActionTypes
} from './types';

const initialState: MenuState = {
  menuCollapsed: false
};

export function menuReducer(
  state = initialState,
  action: MenuActionTypes
): MenuState {
  switch (action.type) {
    case EXPAND_MENU:
      return {
        ...state,
        menuCollapsed: false,
      };
    case COLLAPSE_MENU:
      return {
        ...state,
        menuCollapsed: true,
      };
    default:
      return state
  }
}