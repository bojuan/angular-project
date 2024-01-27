import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interfaces';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  /* books: Book[] = [
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
  ]; */

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>('/api/books')
  }
}
