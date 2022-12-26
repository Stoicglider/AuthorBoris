

let home = document.getElementById('home');
let about = document.getElementById('about');
let books = document.getElementById('books');
let freeBook = document.getElementById('free-book');
let homeButton = document.getElementById('home-button');
let aboutButton = document.getElementById('about-button');
let booksButton = document.getElementById('books-button');
let freeBookButton = document.getElementById('free-book-button');

about.style.display = 'none';
books.style.display = 'none';
freeBook.style.display = 'none';
home.style.display = 'block';
homeButton.style.borderBottom = "1px solid red";

//styles
let none = 'none';
let block = 'block';
let flex = 'flex';
let red = '1px solid red';


homeButton.addEventListener('click', () => {
    homeButton.style.borderBottom = red;
    aboutButton.style.borderBottom = none;
    booksButton.style.borderBottom = none;
    freeBookButton.style.borderBottom = none;
    home.style.display = block;
    about.style.display = none;
    books.style.display = none;
    freeBook.style.display = none;


})

aboutButton.addEventListener('click', () => {
    homeButton.style.borderBottom = none;
    aboutButton.style.borderBottom = red;
    booksButton.style.borderBottom = none;
    freeBookButton.style.borderBottom = none;
    home.style.display = none;
    about.style.display = flex;
    books.style.display = none;
    freeBook.style.display = none;
})

booksButton.addEventListener('click', () => {
    homeButton.style.borderBottom = none;
    aboutButton.style.borderBottom = none;
    booksButton.style.borderBottom = red;
    freeBookButton.style.borderBottom = none;
    home.style.display = none;
    about.style.display = none;
    books.style.display = block;
    freeBook.style.display = none;



})
freeBookButton.addEventListener('click', () => {
    homeButton.style.borderBottom = none;
    aboutButton.style.borderBottom = none;
    booksButton.style.borderBottom = none;
    freeBookButton.style.borderBottom = red;
    home.style.display = none;
    about.style.display = none;
    books.style.display = none;
    freeBook.style.display = block;

})