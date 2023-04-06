// Define the Book class
class Book {
  constructor(title, author) {
  // Initialize the title and author properties of a book object
  this.title = title;
  this.author = author;
  }
  // Render the book as a DOM element
  render() {
      // Create a div element to represent the book
      const bookElement = document.createElement('div');
      // Add the 'book' class to the book element
      bookElement.classList.add('book');
  
      // Create a h2 element to hold the book title
      const titleElement = document.createElement('h2');
      titleElement.innerText = this.title;
      bookElement.appendChild(titleElement);
  
      // Create a p element to hold the book author
      const authorElement = document.createElement('p');
      authorElement.innerText = `By ${this.author}`;
      bookElement.appendChild(authorElement);
  
      // Return the book element
      return bookElement;
    }
  }
  // Define the Bookshelf class
  class Bookshelf {
  constructor() {
  // Initialize an empty array to hold books
  this.books = [];
  }
  // Add a book to the bookshelf
  addBook(book) {
    // Add the book object to the array of books
    this.books.push(book);
  }
  
    // Render the bookshelf as a DOM element
  render() {
      // Create an unordered list element to represent the bookshelf
      const bookshelfElement = document.createElement('ul');
      // Add the 'bookshelf' class to the bookshelf element
      bookshelfElement.classList.add('bookshelf');
      
      // Iterate over each book in the array of books
      for (let i = 0; i < this.books.length; i++) {
          const book = this.books[i];
          // Render the book as a DOM element
          const bookElement = book.render();
          
          // Create a list item element to hold the book
          const liElement = document.createElement('li');
          // Add the book element to the list item
          liElement.appendChild(bookElement);
          // Add the list item to the bookshelf
          bookshelfElement.appendChild(liElement);
      }
  
      // Return the bookshelf element
      return bookshelfElement;
  }
  // Fill the bookshelf with books from data
  fillWithData(data) {
      // Iterate over each book data object in the array
      for (let i = 0; i < data.length; i++) {
          const bookData = data[i];
          // Create a new Book object with the title and author from the book data
          const book = new Book(bookData.title, bookData.author);
          // Add the book to the bookshelf
          this.addBook(book);
      }
  }
  }
  
  // Create a new instance of the Bookshelf class
  const bookshelf = new Bookshelf();
  // Fill the bookshelf with books from the bookData array
  bookshelf.fillWithData(bookData);
  // Render the bookshelf as a DOM element and append it to the body of the document
  document.body.appendChild(bookshelf.render());