import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart, CartStore } from '../interfaces/cart.interface';
import { selectCarts } from '../store/cart.selectors';
import { addCart, removeCart, updateCart } from '../store/cart.actions';
import { CARTS } from '../utils/constants/mock-data';
import { CuponCodes } from '../interfaces/order.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: Cart[] = CARTS;
  private validCodes = [
    { code: 'ASD2D45', value: 5 },
    { code: 'BS23D4M', value: 10 },
  ];
  constructor(private store: Store<{ cart: CartStore }>) {
    store.select(selectCarts).subscribe((carts) => {
      this.carts = carts;
    });
  }

  verifyCodes(code: CuponCodes) {
    const cuponFound = this.validCodes.find((item) => item.code === code.code);
    return { isValid: !!cuponFound, value: cuponFound?.value ?? 0 };
  }

  removeCart(id: number) {
    this.store.dispatch(removeCart({ id }));
  }

  addCart(cart: Cart) {
    this.store.dispatch(addCart({ cart }));
  }

  updateCart(id: number, cart: Partial<Cart>) {
    console.log('updateCart -->', updateCart);
    this.store.dispatch(updateCart({ id, cart }));
  }
}
