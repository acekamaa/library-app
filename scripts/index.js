// scripts/index.js
import { myLibrary, addBookToLibrary, removeBookFromLibrary } from './script.js';

const displayBooksContainer = document.querySelector('.displaybooks');
const newBookBtn = document.querySelector('.newBook button');

// Create modal form using <dialog>
const dialog = document.createElement('dialog');
dialog.innerHTML = `
  <form method="dialog" class="book-form">
    <h3>Add New Book</h3>

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

// Show form
newBookBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Handle form submit
dialog.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault(); // IMPORTANT

  const form = e.target;
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.checked;

  addBookToLibrary(author, title, pages, read);
  displayBooks();

  form.reset();
  dialog.close();
});

const cancelBtn = dialog.querySelector('#cancelBtn');

cancelBtn.addEventListener('click', () => {
  dialog.close();
});

// Display books
function displayBooks() {
  displayBooksContainer.innerHTML = '';

  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.dataset.id = book.id;

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read'}</p>

      <button class="toggle-read">Toggle Read</button>
      <button class="remove-book">Remove</button>
    `;

    // Toggle read
    card.querySelector('.toggle-read').addEventListener('click', () => {
      book.toggleRead();
      displayBooks();
    });

    // Remove book
    card.querySelector('.remove-book').addEventListener('click', () => {
      removeBookFromLibrary(book.id);
      displayBooks();
    });

    displayBooksContainer.appendChild(card);
  });
}

// backdrop clicks
dialog.addEventListener('click', (e) => {
  // if click is outside the form
  if (e.target === dialog) {
    dialog.close();
  }
});

// Add sample books for testing
addBookToLibrary('George Orwell', '1984', 328, true);
addBookToLibrary('J.K. Rowling', 'Harry Potter', 450, false);
displayBooks();
