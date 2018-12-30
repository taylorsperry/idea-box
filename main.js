//////
//Global Variables
//////
var searchInput = document.querySelector(".search-bar");

var titleInput = document.querySelector("#title");

var bodyInput = document.querySelector("#body");

var searchButton = document.querySelector("#search-btn");

var saveButton = document.querySelector("#save-btn");

var createdIdeaCards = document.querySelector("#bottom");

var swillButton = document.querySelector(".swill-btn");
var plausibleButton = document.querySelector(".plausible-btn");
var geniusButton = document.querySelector(".genius-btn");


var searchBar = document.querySelector(".search-bar");

var swillArray;

var ideaArray = [];

//////
//EVENT LISTENERS
//////
saveButton.addEventListener("click", uponSaveClick);

createdIdeaCards.addEventListener("click", manipulateCard);

createdIdeaCards.addEventListener("click", upQuality);

createdIdeaCards.addEventListener("click", downQuality);

createdIdeaCards.addEventListener("keydown", function(event) {
  editCard(event );
});

swillButton.addEventListener("click", filterBySwill);

plausibleButton.addEventListener("click", filterByPlausible);

geniusButton.addEventListener("click", filterByGenius);

searchBar.addEventListener("keyup", filterInSearch);




//////
// FUNCTIONS
/////

reloadCards();

function filterInSearch() {
  var inputSearch = searchBar.value.toUpperCase();
  var filteredSearch = ideaArray.filter(function (idea) {
    var titleSearch = idea.title.toUpperCase(); 
    var bodySearch = idea.body.toUpperCase();
    return titleSearch.includes(inputSearch) || bodySearch.includes(inputSearch)
  });
  var newCard = document.querySelector("#bottom");
  newCard.innerHTML = "";
  filteredSearch.forEach(function(idea) {
    addCard(idea)
  });
}

function filterBySwill() {
  swillArray = ideaArray.filter(function(currentIdea) {
    return currentIdea.quality === "Swill";
  })
    var newCard = document.querySelector("#bottom");
    newCard.innerHTML = "";
    swillArray.forEach(function(idea) {
    addCard(idea);
    })
}

function filterByPlausible() {
  plausibleArray = ideaArray.filter(function(currentIdea) {
    return currentIdea.quality === "Plausible";
  })
      var newCard = document.querySelector("#bottom");
    newCard.innerHTML = "";
    plausibleArray.forEach(function(idea) {
    addCard(idea);
    })
} 

function filterByGenius() {
  geniusArray = ideaArray.filter(function(currentIdea) {
    return currentIdea.quality === "Genius";
  })
      var newCard = document.querySelector("#bottom");
    newCard.innerHTML = "";
    geniusArray.forEach(function(idea) {
    addCard(idea);
    })
}

function reloadCards() {
 Object.keys(localStorage).forEach(function(key) {
  var thisCard = JSON.parse(localStorage.getItem(key))
  addCard(thisCard);
  var newIdea = new Idea(thisCard.id, thisCard.title, thisCard.body, thisCard.quality);
  ideaArray.push(newIdea);
 })
}

function uponSaveClick(e) {
  e.preventDefault();
  var newIdea = new Idea(Date.now(), titleInput.value, bodyInput.value);
  newIdea.saveToStorage();
  ideaArray.push(newIdea);
  addCard(newIdea);
  document.querySelector(".content").reset();
} 

function addCard(idea) {
  var cardField = document.createElement("section");
  var newCard = document.querySelector("#bottom");
  cardField.className = "card-field";
  cardField.innerHTML = 
     `<div data-id=${idea.id}>
       <div class="div-top">
          <h2 id="title-output" contenteditable="true" class="edit">${idea.title}</h2>
          <p id="body-output" contenteditable="true" class="edit">${idea.body}</p>
        </div>
        <div class="div-bottom">
          <aside id="card-footer-left">
            <button id="down-btn">
              <img src="media/downvote.svg">
              <div class="overlay down" id="down"></div>
            </button>
            <button id="up-btn">
              <img src="media/upvote.svg">
              <div class="overlay" id="up"></div>
            </button>
            <p>Quality: <span>${idea.quality}</span></p>
          </aside>
          <aside id="card-footer-right">
            <button id="delete-btn"><img src="media/delete.svg">
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
  if (event.target.classList.contains("edit")) {
    editCard();
  }
}

function deleteCard() {
  var uniqueID = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
  var index = ideaArray.findIndex(function(idea) {
    return idea.id === parseInt(uniqueID);
  });
  ideaArray[index].deleteFromStorage();
  ideaArray.splice(index, 1);
  event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}

function upQuality(event) {
  var uniqueID = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
  var foundIdea = ideaArray.find(function(idea) {
    return idea.id === parseInt(uniqueID)
})   
  if (event.target.id === "up") {
      var quality = event.target.parentElement.nextSibling.nextSibling.childNodes[1] 
        if (quality.innerText === "Swill") {
          quality.innerText = "Plausible";
          foundIdea.updateQuality("Plausible");
        } else if (quality.innerText === "Plausible") {
          quality.innerText = "Genius";
          foundIdea.updateQuality("Genius");
      }
   }
}

function downQuality(event) {
  event.preventDefault();
  var uniqueID = event.target.parentElement.parentElement.parentElement.parentElement.dataset.id;
  var foundIdea = ideaArray.find(function(idea) {
    return idea.id === parseInt(uniqueID)
})   
  if (event.target.id === "down") {
      var quality = event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1].innerText; 
        if (event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1].innerText === "Genius") {
          event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1].innerText = "Plausible" 
          foundIdea.updateQuality("Plausible")
          quality = "Plausible"
        } else if (quality === "Plausible") {
          event.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1].innerText = "Swill"
          quality = "Swill"
          foundIdea.updateQuality("Swill")
      }
    }
}

var editTitle;
var editBody; 

function editCard(event) {
  if(!event){
    return
  }
  var uniqueID = event.target.parentElement.parentElement.dataset.id;
  var editIdea = ideaArray.find(function(idea) {
    return idea.id === parseInt(uniqueID);
    })
  if (event.target.id === 'title-output') {
    editTitle = event.target.innerText;
    editIdea.title = editTitle;
    editIdea.saveToStorage();
  }
   if (event.target.id === 'body-output') {
    editBody = event.target.innerText;
    editIdea.body = editBody;
    editIdea.saveToStorage();
  }
  if (event.keyCode === 13) {
    event.target.toggleAttribute('contenteditable');
  }
  if (event.keyCode === 13) {
    event.target.toggleAttribute('contenteditable');
  }
 }





