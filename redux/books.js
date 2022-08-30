import * as ActionTypes from './ActionTypes';

export const books = (state = { isLoading: true, errMess: null, books: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOKS:
      return { ...state, isLoading: false, errMess: null, dishes: action.payload };
    case ActionTypes.BOOKS_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] }
    case ActionTypes.BOOKS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};