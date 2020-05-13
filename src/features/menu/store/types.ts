// Menu's slice of state
export interface MenuState {
  menuCollapsed: boolean;
}

// Menu's available ACTION NAMES
export const EXPAND_MENU = "EXPAND_MENU";
export const COLLAPSE_MENU = "COLLAPSE_MENU";

// Menu's actions
export interface ExpandMenuAction {
  type: typeof EXPAND_MENU;
}
export interface CollapseMenuAction {
  type: typeof COLLAPSE_MENU;
}

export type MenuActionTypes =
  ExpandMenuAction |
  CollapseMenuAction;
