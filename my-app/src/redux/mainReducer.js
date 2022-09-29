const initiaState = {
   globalTextBlockInput: [],
}
export const mainReducer = (state = initiaState, action) => {
   switch (action.type) {
      case 'CLICK_TO_CARD':
         return {
            ...state,
            globalСounter: action.payload.globalСounter,
         }
      case 'CLICK_TO_LIKES_CARD':
         return {
            ...state,
            globalСounterLikes: action.payload.globalСounterLikes,
         }
      case 'GET_VISIBILITY_CART':
         return {
            ...state,
            globalStyleVisibilityCart: action.payload.globalStyleVisibilityCart,
         }
      case 'GET_VISIBILITY_FAVORIT':
         return {
            ...state,
            globalStyleVisibilityFavorite: action.payload.globalStyleVisibilityFavorite,
         }
      default: return state;
   }
}