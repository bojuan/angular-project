import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-detail-page',
  templateUrl: './shopping-detail-page.component.html',
  styleUrls: ['./shopping-detail-page.component.scss'],
})
export class ShoppingDetailPageComponent {
  constructor(private cartService: CartService) {}

  get carts() {
    return this.cartService.carts;
  }

  handleRemoveCart(cart: Cart) {
    this.cartService.removeCart(cart.id);
  }
}
