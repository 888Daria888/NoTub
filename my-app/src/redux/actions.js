import {
   SEAECH_TEXT,
   ERROR_SEARCH,
   CHANGE_className_MENU_BODY,
} from './types';

export function searchText(searchText) {
   return {
      type: SEAECH_TEXT,
      payload: { globalSearch: searchText }
   }
}
export function getError(isError) {
   return {
      type: ERROR_SEARCH,
      payload: isError
   }
}
export function getclassNameMenuBody(calssMenuBody) {
   return {
      type: CHANGE_className_MENU_BODY,
      payload: { globalCalssMenuBody: calssMenuBody }
   }
}