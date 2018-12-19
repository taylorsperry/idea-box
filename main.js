/// Global Variables ///

var searchInput = document.querySelector(".search-bar");

var titleInput;

// var titleOutput = document.querySelector("#title-output");

var bodyInput = document.querySelector("#body");

// var bodyOutput = document.querySelector("#body-output");

var searchButton = document.querySelector("#search-btn");

var saveButton = document.querySelector("#save-btn");



saveButton.addEventListener("click", addCard);


//////Functions/////

// appends cards to 'bottom' section
function addCard(e) {
  e.preventDefault();
  titleInput = document.querySelector("#title").value;
  
  // how do we append an html element to our 'bottom' section?
  // and, how do we put our titleInput variable in that HTML?

  newCard.appendChild(newTitle);


  var currentCard = document.getElementById("bottom");
  document.body.insertBefore(newCard, currentCard)
  // titleOutput.innerText = titleInput.value;
  // bodyOutput.innerText = bodyInput.value;
}

