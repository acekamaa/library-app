// scripts/script.js
//this file contains js for logic flow
export class Book {
  constructor(author, title, pages, read, image) {
    this.id = crypto.randomUUID(); // unique & stable id
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    this.image = this.resolveImage(image);
  }

  resolveImage(image) {
    if(image && image.trim() !== "") {
      return image.trim();
    }

    // fallback placeholder with title
    return `https://via.placeholder.com/250x350?text=${encodeURIComponent(this.title)}`;
  }

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
