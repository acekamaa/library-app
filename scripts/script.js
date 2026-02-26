// scripts/script.js
//this file contains js for logic flow
export class Book {
  constructor(author, title, pages, read, image) {
    this.id = crypto.randomUUID(); // unique & stable id
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.image = image || 'https://via.placeholder.com/150';
  }

  // Prototype method to toggle read status
  toggleRead() {
    this.read = !this.read;
  }
}

export class Library {
  #books = [];

  addBook(book) {
    this.#books.push(book);
  }

  removeBook(id) {
    this.#books = this.#books.filter((book) => book.id !== id);
  }

  getBooks() {
    return this.#books;
  }

  getBookById(id) {
    return this.#books.find((book) => book.id === id);
  }
}
