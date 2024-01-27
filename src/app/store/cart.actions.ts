import { createAction, props } from '@ngrx/store';
import { Cart } from '../interfaces/cart.interface';

export const addCart = createAction('[cart] add', props<{ cart: Cart }>());
export const removeCart = createAction(
  '[cart] remove',
  props<{ id: number }>()
);
export const updateCart = createAction(
  '[cart] update',
  props<{ id: number; cart: Partial<Cart> }>()
);
