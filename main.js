/// Global Variables ///

var searchInput = document.querySelector(".search-bar");

var titleInput = document.querySelector("#title");

// var titleOutput = document.querySelector("#title-output");

var bodyInput = document.querySelector("#body");

// var bodyOutput = document.querySelector("#body-output");

var searchButton = document.querySelector("#search-btn");

var saveButton = document.querySelector("#save-btn");

var ideaArray = [];
console.log(ideaArray + "inside array");
console.log(localStorage)

saveButton.addEventListener("click", uponSaveClick);


//////Functions/////

//reload cards
reloadCards();

function reloadCards() {
 Object.keys(localStorage).forEach(function(key) {
  addCard(JSON.parse(localStorage.getItem(key)));
 })
}

function uponSaveClick(e) {
  e.preventDefault();
  addCard();
  addToStorage();
}

// appends cards to 'bottom' section
function addCard(idea) {
  var cardField = document.createElement("section");
  var newCard = document.querySelector("#bottom");
  cardField.className = "card-field";
  cardField.innerHTML = 
     `<div class="div-top">
        <h2 id="title-output">${titleInput.value}</h2>
        <p id="body-output">${bodyInput.value}</p>
      </div>
      <div class="div-bottom">
        <aside id="card-footer-left">
          <button id="down-btn"><img src="media/downvote.svg"></button>
          <button id="up-btn"><img src="media/upvote.svg"></button>
          <p>Quality: <span></span></p>
        </aside>
        <aside id="card-footer-right">
          <button id="delete-btn"><img src="media/delete.svg"></button>
        </aside>
      </div>
     `;
  newCard.insertBefore(cardField, newCard.firstChild);
}

//adds card to storage
function addToStorage() {
  var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value);
  newIdea.saveToStorage();
  ideaArray.push(newIdea);
  console.log(ideaArray);
}




