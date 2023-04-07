import { projectArray } from "./form";

const detailsRender = (projectArray, uniqueID) => {
  document.querySelector(".project-details").style.display = "block";
  document.querySelector(".priority-details").style.display = "none";

  const showTitle = document.querySelector(".title");
  const showDescription = document.querySelector(".description");
  const showPriority = document.querySelector(".priority");

  if (uniqueID === "x") {
    showTitle.textContent = "";
    showDescription.textContent = "";
    showPriority.textContent = "";
  } else {
    showTitle.textContent = projectArray[uniqueID]["title"];
    showDescription.textContent = projectArray[uniqueID]["description"];

    if (projectArray[uniqueID]["priority"] === "true") {
      showPriority.textContent = "Priority: true";
    } else {
      showPriority.textContent = "Priority: false";
    }
  }

  checklistDiv = document.querySelector(".checklist-div");
  notesButtonDiv = document.querySelector(".notes-div");

  if (uniqueID === "x") {
    checklistDiv.style.display = "none";
    notesButtonDiv.style.display = "none";
  } else {
    checklistDiv.style.display = "flex";
    checklistDiv.setAttribute("id", uniqueID);

    notesButtonDiv.setAttribute("id", uniqueID);
    notesButtonDiv.style.display = "flex";

    checklistDiv.innerHTML = "";
    notesButtonDiv.innerHTML = "";

    checklistButton = document.createElement("button");
    checklistButton.textContent = "+ Add Task";
    checklistButton.addEventListener("click", createChecklist);
    checklistDiv.appendChild(checklistButton);

    notesButton = document.createElement("button");
    notesButton.textContent = "+ Add Notes";
    notesButton.addEventListener("click", createNotes);
    notesButtonDiv.appendChild(notesButton);
  }

  if (projectArray[uniqueID]["checklist"] != "") {
    taskRender(projectArray[uniqueID]["checklist"]);
  }

  if (projectArray[uniqueID]["notes"] != "") {
    noteRender(projectArray[uniqueID]["notes"]);
  }
};

//-------------------------------------------------------------------------------------------------

const createChecklist = () => {
  checklistButton.remove();

  checklistForm = document.createElement("div");

  taskNameInput = document.createElement("input");

  taskAddButton = document.createElement("button");
  taskAddButton.textContent = "Add Task";
  taskAddButton.addEventListener("click", () => {
    console.log(checklistDiv.id);
    addTask(checklistDiv.id);
  });

  taskCancelButton = document.createElement("button");
  taskCancelButton.textContent = "Cancel Task";
  taskCancelButton.addEventListener("click", cancelTask);

  checklistForm.append(taskNameInput, taskAddButton, taskCancelButton);
  checklistDiv.append(checklistForm);
};

const createNotes = () => {
  notesButton.remove();

  notesForm = document.createElement("div");

  notesInput = document.createElement("textarea");

  notesAddButton = document.createElement("button");
  notesAddButton.textContent = "Add Note";
  notesAddButton.addEventListener("click", () => {
    addNote(checklistDiv.id);
  });

  notesCancelButton = document.createElement("button");
  notesCancelButton.textContent = "Cancel Note";
  notesCancelButton.addEventListener("click", cancelNote);

  notesForm.append(notesInput, notesAddButton, notesCancelButton);
  notesButtonDiv.append(notesForm);
};

//-------------------------------------------------------------------------------------------------

const addTask = (taskID) => {
  const task = taskNameInput.value;
  projectArray[taskID]["checklist"].push(task);
  console.log(taskID);

  taskRender(projectArray[taskID]["checklist"]);
};

const cancelTask = () => {
  checklistForm.remove();
  checklistDiv.append(checklistButton);
};

//-------------------------------------------------------------------------------------------------

const addNote = (noteID) => {
  const note = notesInput.value;
  projectArray[noteID]["notes"].push(note);
  console.log(projectArray);

  noteRender(projectArray[noteID]["notes"]);
};

const cancelNote = () => {
  notesInput.remove();
  notesAddButton.remove();
  notesCancelButton.remove();

  notesButtonDiv.append(notesButton);
};

//-------------------------------------------------------------------------------------------------

let checklistDiv;
let checklistButton;
let checklistForm;
let taskNameInput;
let taskAddButton;
let taskCancelButton;

let notesButtonDiv;
let notesButton;
let notesForm;
let notesInput;
let notesAddButton;
let notesCancelButton;

export default detailsRender;
