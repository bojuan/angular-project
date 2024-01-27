import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() book!: Book;
  @Output() clickCTA = new EventEmitter<Book>();

  handleClick() {
    this.clickCTA.emit(this.book);
  }
}
