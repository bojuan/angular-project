import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent {
  @Input() cart!: Cart
  @Output() clickRemove = new EventEmitter()

  handleRemoveClick() {
    this.clickRemove.emit()
  }
}
