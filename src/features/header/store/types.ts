// Describing the shape of the chat's slice of state
export interface HeaderState {
  placeholder: string;
}

// Describing the different ACTION NAMES available
export const HEADER_PLACEHOLDER = "HEADER_PLACEHOLDER";

export interface HeaderPlaceholderAction {
  type: typeof HEADER_PLACEHOLDER;
  payload: string;
}

export type HeaderActionTypes =
  HeaderPlaceholderAction;
