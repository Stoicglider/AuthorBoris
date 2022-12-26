

let home = document.getElementById('home');
let about = document.getElementById('about');
let books = document.getElementById('books');
let homeButton = document.getElementById('home-button');
let aboutButton = document.getElementById('about-button');
let booksButton = document.getElementById('books-button');
let freeBookButton = document.getElementById('free-book-button');

about.style.display = 'none';
books.style.display = 'none';
home.style.display = 'block';
homeButton.style.borderBottom = "1px solid red";

//styles
let none = 'none';
let block = 'block';
let flex = 'flex';
let red = '1px solid red';


homeButton.addEventListener('click', () => {
    homeButton.style.borderBottom = red;
    document.querySelector('h1').style.display = 'block';
    home.style.marginBottom = '0px';
    aboutButton.style.borderBottom = none;
    booksButton.style.borderBottom = none;
    freeBookButton.style.borderBottom = none;
    home.style.display = block;
    about.style.display = none;
    books.style.display = none;


})

aboutButton.addEventListener('click', () => {
    homeButton.style.borderBottom = none;
    aboutButton.style.borderBottom = red;
    booksButton.style.borderBottom = none;
    freeBookButton.style.borderBottom = none;
    home.style.display = none;
    about.style.display = flex;
    books.style.display = none;
})

booksButton.addEventListener('click', () => {
    homeButton.style.borderBottom = none;
    aboutButton.style.borderBottom = none;
    booksButton.style.borderBottom = red;
    freeBookButton.style.borderBottom = none;
    home.style.display = none;
    about.style.display = none;
    books.style.display = block;



})
freeBookButton.addEventListener('click', () => {
    homeButton.style.borderBottom = none;
    aboutButton.style.borderBottom = none;
    booksButton.style.borderBottom = none;
    freeBookButton.style.borderBottom = red;
    home.style.display = block;
    document.querySelector('h1').style.display = 'none';
    home.style.marginBottom = '150px';
    about.style.display = none;
    books.style.display = none;

})