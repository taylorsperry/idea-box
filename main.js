/// Global Variables ///

var searchInput = document.querySelector(".search-bar");

var titleInput = document.querySelector("#title");

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
  var cardField = document.createElement("section");
  var newCard = document.querySelector("#bottom");
  cardField.className = "card-field";
  cardField.innerHTML = 
  `<article class="idea-card">
      <h2 id="title-output">${titleInput.value}</h2>
      <p id="body-output">${bodyInput.value}</p>
      <div>
        <aside id="card-footer-left">
          <button id="down-btn"><img src="media/downvote.svg"></button>
          <button id="up-btn"><img src="media/upvote.svg"></button>
          <p>Quality: <span></span></p>
        </aside>
        <aside id="card-footer-right">
          <button id="delete-btn"><img src="media/delete.svg"></button>
        </aside>
      </div>
    </article>
  `;
  newCard.insertBefore(cardField, newCard.firstChild);
  
  // how do we append an html element to our 'bottom' section?
  // and, how do we put our titleInput variable in that HTML?

  // newCard.appendChild(newTitle);


  // var currentCard = document.getElementById("bottom");
  // document.body.insertBefore(newCard, currentCard)
  // titleOutput.innerText = titleInput.value;
  // bodyOutput.innerText = bodyInput.value;
}

