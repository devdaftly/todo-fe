import {
  EXPAND_MENU,
  COLLAPSE_MENU,
  ExpandMenuAction,
  CollapseMenuAction
} from './types';

export function expandMenu(): ExpandMenuAction {
  return {
    type: EXPAND_MENU
  }
}

export function collapseMenu(): CollapseMenuAction {
  return {
    type: COLLAPSE_MENU
  }
}
