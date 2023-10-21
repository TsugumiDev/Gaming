import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/actionTypes";

export const addToBasketAction = (data) => {
  return {
    type: ADD_TO_BASKET,
    data: data,
  };
};

export const removeFromBasketAction = (data) => {
  return {
    type: REMOVE_FROM_BASKET,
    data: data,
  };
};
