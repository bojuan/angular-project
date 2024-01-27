import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() carts: Cart[] = [];
  @Output() clickActionCart = new EventEmitter<{
    action: 'remove' | 'quantity';
    value: Cart | { id: number; quantity: number };
  }>();

  handleRemoveCart(value: Cart) {
    this.clickActionCart.emit({
      action: 'remove',
      value,
    });
  }

  handleQuantityCart(value: { id: number; quantity: number }) {
    this.clickActionCart.emit({
      action: 'quantity',
      value,
    });
  }
}
