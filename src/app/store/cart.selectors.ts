// import {createSelector} from "@ngrx/store";
import { createSelector } from '@ngrx/store';
import { CartStore } from '../interfaces/cart.interface';

export const selectCarts = (state: { cart: CartStore }) => {
  return state.cart.carts;
};

export const selectSquaredCount = createSelector(selectCarts, (state) => {
  return state.length;
});

/* export const selectSquaredCount = createSelector(
  selectCount,
  state => {
    return Math.pow(state, 2);
  }
); */
