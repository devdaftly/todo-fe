import { CONTENT_PLACEHOLDER, ContentPlaceholderAction } from './types';

export function contentPlaceholder(placeholder: string): ContentPlaceholderAction {
  return {
    type: CONTENT_PLACEHOLDER,
    payload: placeholder
  }
}
