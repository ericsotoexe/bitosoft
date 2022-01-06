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
