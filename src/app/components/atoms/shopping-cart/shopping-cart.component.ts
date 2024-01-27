import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  @Input() count: number = 0

  @Output() clickCart = new EventEmitter<number>()

  handleClick() {
    this.clickCart.emit(this.count)
  }
}
