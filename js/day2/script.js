// Select elements
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

// Add task when button is clicked
addBtn.addEventListener("click", function () {

    // Create a new list item
    const li = document.createElement("li");

    // Put the input text inside the list item
    li.innerText = taskInput.value;

    // Add the list item to the ul
    taskList.appendChild(li);

    // Clear the input box
    taskInput.value = "";

});