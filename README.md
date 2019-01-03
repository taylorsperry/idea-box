## IdeaBox Triples
This project was designed as a way of solidifying some specific javascript processes, as well as an html and css practice. The goal was to improve on building responsive client-side applications with good user feedback, understand how to implement client-side data persistence using local storage, understand what it looks like to have a separate data model (using a class) and dom model, understand how to utilize data-* attributes, understand how to iterate over dom elements in order to filter what is being displayed, and understand how to craft code with clean style, using small functions that show trends toward DRYness.

IdeaBox allows a user to create an "idea" with a title and body text, use up and down buttons to change the "quality" of a targeted idea, click a delete button to delete a targeted idea, update ideas after they've been added, filter ideas by quality, and search for ideas in the search bar. Ideas (as well as any updates to that idea) are saved to local storage and persist on the DOM on pageload. Deleted items are removed from both the DOM and local storage. 

Our greatest struggle was in trying to find a way for the DOM to display only the ten most recent ideas on page load. We knew we could use CSS to create a card field that could essentially hide overflow ideas, but we wanted to find a way to solve the problem with a JavaScript function. We attempted to reverse the idea array and then only iterate through that reversed array 10 times when appending ideas to the DOM, and also attempted to use the .length property to iterate through the last 10 indices in the array. Unfortunately, the closest we ever got was displaying the first ten ideas (rather than the ten most recent). 

Our greatest achievement throughout the process was how well we worked together as a team. This was our second group project at Turing and we each brought different lessons we'd learned from our previous work. We implemented Agile processes, including regular team retros (both remote and in-person) and workflow tools (Trello and Slack), and completed tasks both as a group and individually by delegating responsibilities. 

## Screenshots
#### Provided Full-Size Comp (Desktop version)
![screen shot 2019-01-03 at 8 00 29 am](https://user-images.githubusercontent.com/40274984/50644434-19f66080-0f2e-11e9-992b-375957a55dcb.png)

#### Our Full-Size Rendering
![desktop](https://user-images.githubusercontent.com/40274984/50644545-5fb32900-0f2e-11e9-81ee-124366dd840d.png)

#### Our Full-Size Rendering (with drop-down menu)
![desktop with dropdown](https://user-images.githubusercontent.com/40274984/50644579-78234380-0f2e-11e9-8bde-bda424c42024.png)

#### Provided Mobile Comp
![screen shot 2019-01-03 at 8 00 51 am](https://user-images.githubusercontent.com/40274984/50644481-34c8d500-0f2e-11e9-85b7-012a4035d23e.png)

#### Our Mobile Rendering
![mobile](https://user-images.githubusercontent.com/40274984/50644601-8bceaa00-0f2e-11e9-9550-e8c15dbe6982.png)

#### Our Bonus Ipad/tablet rendering
![ipad](https://user-images.githubusercontent.com/40274984/50644683-c6d0dd80-0f2e-11e9-9c4d-40d986a35744.png)

## Tech/framework used
<b>Built with</b>
- [Sublime Text Editor](https://sublimetext.com)
- HTML
- CSS
- JavaScript

## Credits
The participants in this project were Jacob Admire, Joshua Lavarine, and Taylor Sperry
