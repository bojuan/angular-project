import { createReducer, on } from '@ngrx/store';
import { addCart, removeCart } from './cart.actions';
import { Cart } from '../interfaces/cart.interface';

interface CartStore {
  carts: Cart[];
}

const initialState: CartStore = {
  carts: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addCart, (state, action) => {
    return {
      ...state,
      carts: [...state.carts, action.cart],
    };
  }),
  on(removeCart, (state, action) => {
    const newState = {
      ...state,
      carts: state.carts.filter((item) => item.id !== action.id),
    };
    return newState;
  })
);
