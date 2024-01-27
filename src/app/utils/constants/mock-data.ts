import { Book } from 'src/app/interfaces/book.interfaces';
import { Cart } from 'src/app/interfaces/cart.interface';

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'JavaScript from beginner to Professional',
    description:
      'This book demonstrates the capabilities of JavaScript for web application development by combining theoretical learning with code exercises and fun projects that you can challenge yourself with. The guiding principle of the book is to show how straightforward JavaScript techniques can be used to make web apps ranging from dynamic websites to simple browser-based games. JavaScript from Beginner to Professional focuses on key programming concepts and Document Object Model manipulations that are used to solve common problems in professional web applications. These include data validation, manipulating the appearance of web pages, working with asynchronous and concurrent code. The book uses project-based learning to provide context for the theoretical components in a series of code examples that can be used as modules of an application, such as input validators, games, and simple animations. This will be supplemented with a brief crash course on HTML and CSS to illustrate how JavaScript components fit into a complete web application. As you learn the concepts, you can try them in your own editor or browser console to get a solid understanding of how they work and what they do. By the end of this JavaScript book, you will feel confident writing core JavaScript code and be equipped to progress to more advanced libraries, frameworks, and environments such as React, Angular, and Node.js.',
    category: 'Programming',
    thumbnail: 'https://content.packt.com/B16682/cover_image_small.png',
    author: 'Laurence Lars Svekis',
    price: 36.99,
  },
  {
    id: 2,
    title: 'Angular Projects - Third Edition',
    description:
      "Angular Projects isn't like other books on Angular – this is a project-based guide that helps budding Angular developers get hands-on experience while developing cutting-edge applications. In this updated third edition, you’ll master the essential features of the framework by creating ten different real-world web applications. Each application will demonstrate how to integrate Angular with a different library and tool, giving you a 360-degree view of what the Angular ecosystem makes possible. Updated to the newest version of Angular, the book has been revamped to keep up with the latest technologies. You’ll work on a PWA weather application, a mobile photo geotagging application, a component UI library, and other exciting projects. In doing so, you’ll implement popular technologies such as Angular Router, Scully, Electron, Angular service workers, Jamstack, NgRx, and more. By the end of this book, you will have the skills you need to build Angular apps using a variety of different technologies according to your or your client’s needs.",
    category: 'Web Development',
    thumbnail: 'https://content.packt.com/B18465/cover_image_small.jpg',
    author: 'Aristeidis Bampakos',
    price: 41.99,
  },
];

export const CARTS: Cart[] = BOOKS.map((item) => ({ ...item, quantity: 2 }));
