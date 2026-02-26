// scripts/index.js
// DOM manipulation and app logic
import { Library, Book } from './script.js';

// Create library instance
const library = new Library();
const displayBooksContainer = document.querySelector('.displaybooks');
const newBookBtn = document.querySelector('.newBook button');

// ---------- CREATE MODAL FORM ----------
const dialog = document.createElement('dialog');
dialog.innerHTML = `
  <form method="dialog" class="book-form">
    <h3>Add New Book</h3>

    <label>
        Cover Image URL
        <input type="text" name="image" placeholder="https://example.com/image.jpg" />
    </label>

    <label>
      Title
      <input type="text" name="title" required />
    </label>

    <label>
      Author
      <input type="text" name="author" required />
    </label>

    <label>
      Pages
      <input type="number" name="pages" required />
    </label>

    <label>
      Read
      <input type="checkbox" name="read" />
    </label>

    <menu>
      <button type="button" id="cancelBtn">Cancel</button>
      <button id="submitBtn" value="default">Add Book</button>
    </menu>
  </form>
`;
document.body.appendChild(dialog);

// Show modal
newBookBtn.addEventListener('click', () => dialog.showModal());

// Close modal
const cancelBtn = dialog.querySelector('#cancelBtn');
cancelBtn.addEventListener('click', () => dialog.close());

// ---------- FORM SUBMIT ----------
dialog.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;

  const title = form.title.value.trim();
  const author = form.author.value.trim();
  const pages = Number(form.pages.value);
  const read = form.read.checked;
  const image = form.image.value; //optional

  const newBook = new Book(author, title, pages, read, image);

  library.addBook(newBook);
  displayBooks();
  form.reset();

  dialog.close();
});

// ---------- DISPLAY BOOKS ----------
function displayBooks() {
  displayBooksContainer.innerHTML = "";

  library.getBooks().forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-cover" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read'}</p>

      <button class="toggle-read">Toggle Read</button>
      <button class="remove-book">Remove</button>
    `;

    // Toggle read status
    card.querySelector('.toggle-read').addEventListener('click', () => {
      book.toggleRead();
      displayBooks();
    });

    // Remove book
    card.querySelector('.remove-book').addEventListener('click', () => {
      library.removeBook(book.id);
      displayBooks();
    });

    displayBooksContainer.appendChild(card);
  });
}

// Close modal when clicking outside the form
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});

// ---------- SAMPLE BOOKS ----------
library.addBook(new Book('George Orwell', '1984', 328, true, "../images/1984.jpeg"));
library.addBook(new Book('J.K. Rowling', 'Harry Potter', 450, false, "../images/harrypotter.jpeg"));

// Initial render
displayBooks();

// Optional: expose function for debugging in console
window.displayBooks = displayBooks;
