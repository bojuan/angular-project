import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interfaces';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input() listBooks: Book[] = [];
}
