import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart.interface';
import { CuponCodes } from 'src/app/interfaces/order.interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss'],
})
export class ShoppingDetailComponent {
  constructor(private cartService: CartService) {}

  codes: CuponCodes[] = [
    {
      isValid: true,
      isApplied: false,
      code: 'FASDASDF',
      value: 5,
    },
  ];

  get subtotal() {
    return this.carts.reduce((accumulator, currentValue) => {
      return currentValue.price * currentValue.quantity + accumulator
    }, 0)
  }

  handleActionCart(arg: {
    action: 'remove' | 'quantity';
    value: number | { id: number; quantity: number };
  }) {
    if (arg.action === 'remove') {
      this.cartService.removeCart((arg.value as Cart).id);
    } else {
      const { id, quantity } = arg.value as { id: number; quantity: number };
      this.cartService.updateCart(id, { quantity });
    }
  }

  handleChangeCodes(arg: { index: number; isRemove?: boolean }) {
    if (arg.isRemove) {
      this.codes = this.codes.filter((_, index) => index !== arg.index);
      return;
    }

    const { isValid, value } = this.cartService.verifyCodes(
      this.codes[arg.index]
    );

    this.codes = this.codes.map((item) => {
      if (this.codes[arg.index].code === item.code) {
        return {
          ...item,
          isValid,
          value,
        };
      }

      return item;
    });
  }

  get carts() {
    return this.cartService.carts;
  }
}
