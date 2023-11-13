let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");

function onClickCreateTask() {
  if (inputTask.value != "") {
    let listElement = document.createElement("li");
    let spanElement = document.createElement("span");
    spanElement.textContent = inputTask.value;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.addEventListener("click", onClickComplete);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Deleted";
    deleteBtn.addEventListener("click", onClickDelete);

    listElement.appendChild(spanElement);
    listElement.appendChild(completeBtn);
    listElement.appendChild(deleteBtn);
    taskList.appendChild(listElement);
  }

  inputTask.value = "";
}

createBtn.addEventListener("click", onClickCreateTask);

function onClickComplete(event) {
  let listElement = event.target.parentElement;

  // toggle method is a shortcut for the following code:
  //   if(listElement.classList.containes("completed")) {
  //      listElement.classList.remove("completed");
  //   } else {
  //     listElement.classList.add("completed");
  //   }
  listElement.classList.toggle("completed");
}

function onClickDelete(event) {
  let listElement = event.target.parentElement;
  taskList.removeChild(listElement);
}
