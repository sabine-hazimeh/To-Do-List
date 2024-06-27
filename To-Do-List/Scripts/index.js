let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.querySelector(".list");
let UserNameInput = document.getElementById("usernameInput");
let TimeInput = document.getElementById("timeInput");

addTaskBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();
  let nameText = UserNameInput.value.trim();
  let timeText = TimeInput.value.trim();

  if (taskText !== "" && nameText !== "" && timeText !== "") {
    let newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = ` ${taskText} <br> ${nameText} <span>|</span> ${timeText}`;
    taskList.appendChild(newTaskItem);
    taskInput.value = "";
    UserNameInput.value = "";
    TimeInput.value = "";

   
    checkDeadlinePassed(newTaskItem, timeText);
    
    newTaskItem.addEventListener("click", function () {
      newTaskItem.style.textDecoration = "line-through";
    });
  }
});

function checkDeadlinePassed(taskItem, timeText) {
  
  let currentDate = new Date();
  
  
  let [hours, minutes] = timeText.split(':');
  
  
  let taskTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes);
  
 
  if (taskTime < currentDate) {
    taskItem.style.color = "red"; 
  } else {
    
    let interval = setInterval(function () {
      currentDate = new Date(); 
      if (taskTime < currentDate) {
        taskItem.style.color = "red";
        clearInterval(interval);
      }
    }, 60000); 
  }
}




function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

document.getElementById("currentDate").textContent = formattedDate;
