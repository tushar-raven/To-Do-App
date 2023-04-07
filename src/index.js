import "./style.css";
import openForm from "./form";

// render details on the page

// Checklist UI

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

const noteRender = (notesArray) => {
  notesButtonDiv.innerHTML = "";

  for (let i = 0; i < notesArray.length; i++) {
    noteDiv = document.createElement("div");
    noteDiv.className = "note-div";
    noteDiv.setAttribute("id", `${i}`);

    const deleteNote = document.createElement("div");
    deleteNote.textContent = "×";
    deleteNote.addEventListener("click", () => {
      removeNote(noteDiv.id, notesArray);
    });

    noteName = document.createElement("div");
    noteName.textContent = notesArray[i];

    noteDiv.append(deleteNote, noteName);
    notesButtonDiv.append(noteDiv);
  }

  notesButtonDiv.append(notesButton);
};

const removeNote = (noteID, notesArray) => {
  notesArray.splice(noteID, 1);
  noteRender(notesArray);
  console.log(notesArray);
};

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

let noteName;

let noteDiv;

//forms

//event listeners
document.querySelector(".top-priority").addEventListener("click", topPriority);
document.querySelector("#add-project-btn").addEventListener("click", openForm);
