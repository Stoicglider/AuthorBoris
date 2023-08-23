// Get DOM elements
const pages = {
  home: document.getElementById("home"),
  about: document.getElementById("about"),
  books: document.getElementById("books"),
  contact: document.getElementById("contact"),
};

const buttons = {
  home: document.getElementById("home-button"),
  about: document.getElementById("about-button"),
  books: document.getElementById("books-button"),
  freeBook: document.getElementById("free-book-button"),
  contact: document.getElementById("contact-button"),
};

// Initial page display
pages.about.style.display = "none";
pages.books.style.display = "none";
pages.home.style.display = "block";
pages.contact.style.display = "none";

// Event listeners for navigation buttons
function handleButtonClick(targetPage, button) {
  Object.values(buttons).forEach((btn) => {
    btn.style.borderBottom = "none";
  });

  button.style.borderBottom = "1px solid red";

  Object.values(pages).forEach((page) => {
    page.style.display = "none";
  });

  pages[targetPage].style.display = "block";

  if (targetPage === "home") {
    document.querySelector("h1").innerHTML =
      "Horror stories that will keep you up at night";
    pages.home.style.marginBottom = "0";
  } else if (targetPage === "freeBook") {
    document.querySelector("h1").innerHTML = "Get a free book";
    pages.home.style.marginBottom = "150px";
  }
}

buttons.home.addEventListener("click", () =>
  handleButtonClick("home", buttons.home)
);
buttons.about.addEventListener("click", () =>
  handleButtonClick("about", buttons.about)
);
buttons.books.addEventListener("click", () =>
  handleButtonClick("books", buttons.books)
);
buttons.freeBook.addEventListener("click", () =>
  handleButtonClick("home", buttons.freeBook)
);
buttons.contact.addEventListener("click", () =>
  handleButtonClick("contact", buttons.contact)
);

const overlay = document.getElementById("initial-overlay");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  overlay.style.opacity = 0;
  setTimeout(() => {
    overlay.style.display = "none";
  }, 1000); // Adjust the timing to match your transition duration
});
