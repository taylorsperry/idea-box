/// Global Variables ///

var searchInput = document.querySelector(".search-bar");

var titleInput = document.querySelector("#title");

var bodyInput = document.querySelector("#body");

var searchButton = document.querySelector("#search-btn");

var saveButton = document.querySelector("#save-btn");

var ideaArray = [];
console.log(localStorage);

var qualitiesArray = ["Swill", "Plausible, Genius"];


//Event Listeners//
saveButton.addEventListener("click", uponSaveClick);
document.querySelector("#bottom").addEventListener("click", manipulateCard);
//classList THEN call deleteCard function / up / down vote functions

//////Functions/////

//reload cards
reloadCards();

function reloadCards() {

 Object.keys(localStorage).forEach(function(key) {
  var thisCard = JSON.parse(localStorage.getItem(key))
  addCard(thisCard);
  
  var newIdea = new Idea(thisCard.id, thisCard.title, thisCard.body);
  ideaArray.push(newIdea);
 })

}

function uponSaveClick(e) {
  e.preventDefault();
  // addToStorage();
  var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value);
  newIdea.saveToStorage();
  ideaArray.push(newIdea);
  console.log(ideaArray);
  addCard(newIdea);
  document.querySelector(".content").reset();
} 

// appends cards to 'bottom' section
function addCard(idea) {
  var cardField = document.createElement("section");
  var newCard = document.querySelector("#bottom");
  cardField.className = "card-field";
  cardField.innerHTML = 
     `<div>
     <div class="div-top">
        <h2 id="title-output">${idea.title}</h2>
        <p id="body-output">${idea.body}</p>
      </div>
      <div class="div-bottom">
        <aside id="card-footer-left">
          <button id="down-btn"><img src="media/downvote.svg">
          <div class="overlay"></div></button>
          <button id="up-btn"><img src="media/upvote.svg">
          <div class="overlay"></div></button>
          <p>Quality: <span class="quality">${idea.quality}</span></p>
        </aside>
        <aside id="card-footer-right">
          <button data-id="${idea.id}" onclick="deleteCard(${idea.id})" id="delete-btn" class="delete"><img src="media/delete.svg">
            <div class="overlay delete"></div></button>
        </aside>
      </div>
      </div>
     `;
  newCard.insertBefore(cardField, newCard.firstChild);
}

function manipulateCard(event) {
  if (event.target.classList.contains("delete")) {
    deleteCard();
  }
}

function deleteCard() {
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}

function upQuality() {
  
}