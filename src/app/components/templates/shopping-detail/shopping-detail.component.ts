import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interfaces';

@Component({
  selector: 'app-shopping-detail',
  templateUrl: './shopping-detail.component.html',
  styleUrls: ['./shopping-detail.component.scss'],
})
export class ShoppingDetailComponent {
  @Input() listBooks: Book[] = [];
}
