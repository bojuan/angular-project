import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart, CartStore } from '../interfaces/cart.interface';
import { selectCarts } from '../store/cart.selectors';
import { addCart, removeCart, updateCart } from '../store/cart.actions';
import { CARTS } from '../utils/constants/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[] = CARTS;
  constructor(private store: Store<{ cart: CartStore }>) {
    store.select(selectCarts).subscribe((carts) => {
      this.carts = carts;
    });
  }

  removeCart(id: number) {
    this.store.dispatch(removeCart({ id }));
  }

  addCart(cart: Cart) {
    this.store.dispatch(addCart({ cart }));
  }

  updateCart(id: number, cart: Partial<Cart>) {
    console.log("updateCart -->", updateCart)
    this.store.dispatch(updateCart({ id, cart }));
  }
}
