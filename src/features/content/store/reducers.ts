import {
  ContentState,
  CONTENT_PLACEHOLDER,
  ContentActionTypes
} from './types';

const initialState: ContentState = {
  placeholder: ''
};

export function contentReducer(
  state = initialState,
  action: ContentActionTypes
): ContentState {
  switch (action.type) {
    case CONTENT_PLACEHOLDER:
      return {
        ...state,
        placeholder: action.payload,
      };
    default:
      return state
  }
}