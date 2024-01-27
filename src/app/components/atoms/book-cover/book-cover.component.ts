import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss'],
})
export class BookCoverComponent {
  @Input() thumbnail: string =
    'https://static.packt-cdn.com/products/9781800562523/graphics/Images/9781839211560.png';
}
