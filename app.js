//
// 10 ------------------------------------------------------------
var list = document.querySelector("#book-list ul");

// delete books
list.addEventListener("click", function (e) {
  if (e.target.className === "delete") {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
});

// Notes -----------------------------
// e = event
// event.targe.parentElement | which is the Ul |
// list.removeChild(li) | Removes the selected li |
// -----------------------------------
//
// 11 -----------------------------------------------------------

//add book-list
var addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;
  // Notes -----------------------------
  // e.preventDefault = event prevent default
  //
  // 12 -----------------------------------------------------------

  // create elements
  var li = document.createElement("li");
  var bookName = document.createElement("span");
  var deleteBtn = document.createElement("span");

  // adding content *order matters*
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  deleteBtn.classList.add("delete");
  bookName.classList.add("name");
  // apend to document
  // *Order matters*
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  addForm.querySelector('input[type="text"]').value = " ";
});

// hide books

var hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter books
var searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  var term = e.target.value.toLowerCase();
  var books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    var title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
