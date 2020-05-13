import { HEADER_PLACEHOLDER, HeaderPlaceholderAction } from './types';

export function headerPlaceholder(placeholder: string): HeaderPlaceholderAction {
  return {
    type: HEADER_PLACEHOLDER,
    payload: placeholder
  }
}
