import { Book } from './book.interfaces';

export interface Cart extends Book {
  quantity: number;
}

export interface CartStore {
  carts: Cart[];
}
