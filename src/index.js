import "./style.css";
import openForm from "./form";
<<<<<<< HEAD
import { topPriority, todayTask, weekTask } from "./sidebarButtons";

=======
const taskRender = (taskArray) => {
  checklistDiv.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.setAttribute("id", `${i}`);

    taskName = document.createElement("div");
    taskName.textContent = taskArray[i];

    const deleteTask = document.createElement("div");
    deleteTask.textContent = "×";
    deleteTask.addEventListener("click", () => {
      removeTask(taskDiv.id, taskArray);
    });

    taskDiv.append(taskName, deleteTask);
    checklistDiv.append(taskDiv);
  }

  checklistDiv.append(checklistButton);
};

const removeTask = (taskID, taskArray) => {
  taskArray.splice(taskID, 1);
  taskRender(taskArray);
  console.log(taskArray);
};

//Notes UI

// priority button

const topPriority = () => {
  document.querySelector(".project-details").style.display = "none";
  const priorityDetails = document.querySelector(".priority-details");
  priorityDetails.style.display = "block";
  console.log(projectArray);

  for (let i = 0; i < projectArray.length; i++) {
    console.log("a");
    console.log(projectArray[i]["priority"]);
    if (projectArray[i]["priority"] === "true") {
      const priorityProject = document.createElement("div");
      priorityProject.textContent = projectArray[i]["title"];
      priorityDetails.appendChild(priorityProject);

      priorityProject.addEventListener("click", () => {
        detailsRender(projectArray, i);
      });
    }
  }
};

//Constructor

//array

//Global Variables

let taskName;
let taskDiv;

//forms

//event listeners
>>>>>>> 7e4f561840a3030717e89d75246d26ee7528cf89
document.querySelector(".top-priority").addEventListener("click", topPriority);
document.querySelector(".today").addEventListener("click", todayTask);
document.querySelector(".week").addEventListener("click", weekTask);
document.querySelector("#add-project-btn").addEventListener("click", openForm);
