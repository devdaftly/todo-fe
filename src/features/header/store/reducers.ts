import {
  HeaderState,
  HEADER_PLACEHOLDER,
  HeaderActionTypes
} from './types';

const initialState: HeaderState = {
  placeholder: ''
};

export function headerReducer(
  state = initialState,
  action: HeaderActionTypes
): HeaderState {
  switch (action.type) {
    case HEADER_PLACEHOLDER:
      return {
        ...state,
        placeholder: action.payload,
      };
    default:
      return state
  }
}