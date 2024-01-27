import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart, CartStore } from '../interfaces/cart.interface';
import { selectCarts } from '../store/cart.selectors';
import { addCart, removeCart } from '../store/cart.actions';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[] = [];
  constructor(private store: Store<{ cart: CartStore }>) {
    store.select(selectCarts).subscribe((carts) => {
      this.carts = carts;
    });
  }

  removeCart(id: string) {
    this.store.dispatch(removeCart({ id }));
  }

  addCart(cart: Cart) {
    this.store.dispatch(addCart({ cart }));
  }
}
