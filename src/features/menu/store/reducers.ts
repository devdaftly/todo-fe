import {
  MenuState,
  EXPAND_MENU,
  COLLAPSE_MENU,
  MenuActionTypes
} from './types';

const initialState: MenuState = {
  menuCollapsed: false,
  todoLists: [
    {
      key: 0,
      title: 'Inbox',
      icon: 'inbox',
    },
    {
      key: 1,
      title: 'Today',
      icon: 'calendar',
    },
    {
      key: 2,
      title: 'Upcoming',
      icon: 'calendar-alt',
    }
  ]
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