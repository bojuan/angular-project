import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { Book } from 'src/app/interfaces/book.interfaces';
import { CartStore } from 'src/app/interfaces/cart.interface';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { addCart, removeCart } from 'src/app/store/cart.actions';
import { selectCarts } from 'src/app/store/cart.selectors';
import { DEFAULT_ITEMS_NAVBAR } from 'src/app/utils/constants/navbar';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent implements OnInit {
  books: Book[] = [];
  loading: boolean = false;
  titlePage: string = '';

  constructor(
    private router: Router,
    private bookService: BooksService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getTitlePage();
    this.getBooks();
  }

  getBooks() {
    this.loading = true;
    this.bookService
      .getBooks()
      .pipe(
        map((books) =>
          books.filter((book) => {
            if (this.titlePage === 'All') return true;
            return book.category === this.titlePage;
          })
        )
      )
      .subscribe({
        next: (response) => {
          this.books = response;
        },
        complete: () => (this.loading = false),
        error: () => (this.loading = false),
      });
  }

  getTitlePage() {
    const url = this.router.url.split('/')[1];
    this.titlePage =
      DEFAULT_ITEMS_NAVBAR.find((item) => item.route === url)?.label ?? '';
  }

  handleAddBookToCart(book: Book) {
    const existCart = this.cartService.carts.find(
      (item) => item.id === book.id
    );

    if (existCart) {
      this.cartService.removeCart(book.id);
    } else {
      this.cartService.addCart({ ...book, quantity: 1 });
    }
  }

  get carts() {
    return this.cartService.carts;
  }
}
