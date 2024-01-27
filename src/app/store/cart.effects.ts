import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { tap, withLatestFrom } from 'rxjs';

import { Injectable } from '@angular/core';
import { addCart, removeCart } from './cart.actions';
import { selectCarts } from './cart.selectors';
import { CartStore } from '../interfaces/cart.interface';

@Injectable()
export class CartEffects {
  saveCount = createEffect(
    () => {
      return this.actions.pipe(
        ofType(addCart, removeCart),
        withLatestFrom(this.store.select(selectCarts)),
        tap(([action, cart]) => {
          localStorage.setItem('cart', JSON.stringify(cart));
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions: Actions,
    private store: Store<{ cart: CartStore }>
  ) {}
}
