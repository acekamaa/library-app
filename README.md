# Library App

This project is an in-house Library that allows users to access the collection of all time classics. It demonstrates a clean easy to use app to access books from selecting it on the UI.

# Features

- books arranged in form of cards for easy accessibility
- user can add a book to the collection for others to enjoy as well
- simple UI with easy to go functionality

# Tech Stack

- basic HTML 5 CSS and JS for basics mastery and practice
- CSS Grid template for aligning the books as cards for a clean and orderly UI
- JS handles the DOM manipulation - '<Dialog>' modal form for a clean html docs

# Project Structure

Library-app/
│
├── index.html
├── styles/
│ └── style.css # Application styling (CSS Grid, layout, modal)
│
├── scripts/
│ ├── script.js # Data & business logic (Book constructor, library array)
│ └── index.js # DOM manipulation & event handling
│
└── README.md

# How it works

- All book data is stored in an in-memory array (`myLibrary`)
- Each book is created using a `Book` constructor
- A unique and stable ID is assigned to each book using `crypto.randomUUID()`
- UI rendering is handled by a single `displayBooks()` function that rebuilds the UI based on the current state of the data
- DOM elements are linked to book objects using `data-id` attributes
- User actions (add, remove, toggle read status) update the data first, then re-render the UI

This data-driven approach ensures the UI always reflects the current application state.

# Getting started

1. clone this repo to your local storage and run the index.html file for full functionality.

``bash
git clone https://github.com/acedev/library-app.git

2. Fork this repo

- you can fork the repo

``bash
https://gihub.com/acedev/library-app.git

(no additional dependencies required)

# Future improvements

=> for the Front end

- add read button and the actual books for the library app to get to MVP-ready
- add the books thumbnails on the cards for familiarity and trigger interest to users
- add download button where users can actually make the files ready to read-offline
- add user authentication and verification
- add user profiles

=> for the backend

- add API's to handle the routes
- add a db to store the books
- handle verification and authentication securing every session with JWT
- deploy the full-stack project make it distr-ready
