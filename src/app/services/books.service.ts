import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interfaces';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Book[] = [
    {
      id: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      thumbnail: 'string',
      author: 'string',
      price: 20,
    },
    {
      id: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      thumbnail: 'string',
      author: 'string',
      price: 20,
    },
    {
      id: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      thumbnail: 'string',
      author: 'string',
      price: 20,
    },
    {
      id: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      thumbnail: 'string',
      author: 'string',
      price: 20,
    },
    {
      id: 'string',
      title: 'string',
      description: 'string',
      category: 'string',
      thumbnail: 'string',
      author: 'string',
      price: 20,
    },
  ];

  constructor() {}

  getBooks() {
    return this.books;
  }
}
