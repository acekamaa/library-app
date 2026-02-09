// scripts/script.js

export const myLibrary = [];

// Book constructor
export function Book(author, title, pages, read) {
  this.id = crypto.randomUUID(); // unique & stable id
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

// Prototype method to toggle read status
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Add book to library
export function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

// Remove book by ID
export function removeBookFromLibrary(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}
