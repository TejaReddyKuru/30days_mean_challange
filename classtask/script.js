
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    
    let task = taskInput.value;
    if(task === ""){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML =task +  ' <button class="updateBtn">Update</button>'+' <button class="deleteBtn">Delete</button>' ;
    // taskList.appendChild(li);
    taskList.appendChild(li);

    taskInput.value = "";

    let deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(li);
    });

    let updateBtn = li.querySelector(".updateBtn");
    updateBtn.addEventListener('click',function(){
        let newTask = prompt("Enter the updated task:", task);
        if(newTask !== null && newTask !== ""){
            li.innerHTML = newTask +  ' <button class="updateBtn">Update</button>'+' <button class="deleteBtn">Delete</button>' ;
        }
        })
});