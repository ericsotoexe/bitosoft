// <TO DO APP CODE>

let toDoForm = document.getElementById("toDoForm");
let toDoField = document.getElementById("toDoField");
let toDoList = document.getElementById("toDoList");

toDoForm.addEventListener("submit", (info) => {
  info.preventDefault();
  createToDoItem(toDoField.value);
});

function createToDoItem(toDoUserItem) {
  let toDoHTML = `<li>${toDoUserItem}. <button class="bottom buzz-out-on-hover" onclick="deleteToDoItem(this)">x</button></li>`;
  toDoList.insertAdjacentHTML("beforeend", toDoHTML);
  toDoField.value = "";
  toDoField.focus();
}

function deleteToDoItem(toDoItemToDelete) {
  toDoItemToDelete.parentElement.remove();
}

// </TO DO APP CODE>

// <DOG API CODE>

async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
}

start();

function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList)
          .map(function (breed) {
            return `<option>${breed}</option>`;
          })
          .join("")}
    </select>
    `;
}

async function loadByBreed(breed) {
  if (breed != "Choose a dog breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    console.log(data);
  }
}

// <DOG API CODE>
