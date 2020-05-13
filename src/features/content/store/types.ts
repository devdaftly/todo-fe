// Describing the shape of the chat's slice of state
export interface ContentState {
  placeholder: string;
}

// Describing the different ACTION NAMES available
export const CONTENT_PLACEHOLDER = "CONTENT_PLACEHOLDER";

export interface ContentPlaceholderAction {
  type: typeof CONTENT_PLACEHOLDER;
  payload: string;
}

export type ContentActionTypes =
  ContentPlaceholderAction;
