import { createReducer, on } from '@ngrx/store';
import { addCart, removeCart, updateCart } from './cart.actions';
import { Cart } from '../interfaces/cart.interface';
import { CuponCodes } from '../interfaces/order.interfaces';

interface CartStore {
  carts: Cart[];
  cuponCodes: CuponCodes[]
}

const initialState: CartStore = {
  carts: [],
  cuponCodes: []
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
  }),
  on(updateCart, (state, action) => {
    const cartsUpdated = state.carts.map((item) => {
      let newItem = { ...item };
      if (item.id === action.id) {
        newItem = { ...newItem, ...action.cart };
      }
      return newItem;
    });

    const newState = {
      ...state,
      carts: cartsUpdated,
    };

    return newState;
  })
);
