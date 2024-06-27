let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.querySelector(".list");

addTaskBtn.addEventListener("click", function () {
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskText;
    taskList.appendChild(newTaskItem);
    taskInput.value = "";

    newTaskItem.addEventListener("click", function () {
      newTaskItem.style.textDecoration = "line-through";
    });
  }
});

// Function to format the date and time
function formatDateTime(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ensure minutes are two digits
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Format the date and time as required (MM/DD/YYYY HH:MM)
  const formattedDateTime = `${month}/${day}/${year} - ${hours}:${formattedMinutes}`;

  return formattedDateTime;
}

// Get the current date and time
const currentDateTime = new Date();

// Format the date and time using the function
const formattedDateTime = formatDateTime(currentDateTime);

// Update the content of the <p> tag with the formatted date and time
document.getElementById("currentDateTime").textContent = formattedDateTime;
