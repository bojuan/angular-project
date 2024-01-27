import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interfaces';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  @Input() listBooks: Book[] = [];
  @Input() listBooksSelected: Book[] = [];
  @Output() clickBook = new EventEmitter<Book>();

  handleClickBook(book: Book) {
    this.clickBook.emit(book);
  }

  verifyIsSelected(book: Book) {
    return !!this.listBooksSelected.find((item) => item.id === book.id);
  }
}
