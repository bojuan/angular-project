import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss'],
})
export class ShoppingDetailComponent {
  @Input() carts: Cart[] = [];

  constructor(private cartService: CartService) {}

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
}
