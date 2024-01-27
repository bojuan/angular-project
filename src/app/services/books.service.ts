import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Book[]>('/api/books')
  }
}
