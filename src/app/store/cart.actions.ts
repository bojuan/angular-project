import { createAction, props } from '@ngrx/store';
import { Cart } from '../interfaces/cart.interface';

export const addCart = createAction('[cart] add', props<{ cart: Cart }>());
export const removeCart = createAction(
  '[cart] remove',
  props<{ id: string }>()
);
