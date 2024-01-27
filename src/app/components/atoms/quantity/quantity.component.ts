import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  @Input() value: number = 0;
  @Output() changeQuantity = new EventEmitter<number>();

  increment() {
    this.value++;
    this.changeQuantity.emit(this.value);
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.changeQuantity.emit(this.value);
    }
  }
}
