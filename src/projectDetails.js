import { projectArray } from "./form";
import format from "date-fns/format";

const detailsRender = (projectArray, uniqueID) => {
  document.querySelector(".project-details").style.display = "flex";
  document.querySelector(".priority-details").style.display = "none";

  const showTitle = document.querySelector(".title");
  const showDescription = document.querySelector(".description");
  const showPriority = document.querySelector(".priority");
  const showDeadline = document.querySelector(".deadline");

  if (uniqueID === "x") {
    showTitle.textContent = "";
    showDescription.textContent = "";
    showPriority.textContent = "";
    showDeadline.textContent = "";
  } else {
    showTitle.textContent = projectArray[uniqueID]["title"];
    showDescription.textContent = projectArray[uniqueID]["description"];

    let deadline = projectArray[uniqueID]["deadline"];
    deadline = format(new Date(deadline), "dd/MM/yyyy");

    showDeadline.textContent = `Deadline: ${deadline}`;

    if (projectArray[uniqueID]["priority"] === "true") {
      showPriority.textContent = "Priority: Yes";
    } else {
      showPriority.textContent = "Priority: No";
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
    checklistButton.className = "add-task";
    checklistButton.addEventListener("click", createChecklist);
    checklistDiv.appendChild(checklistButton);

    notesButton = document.createElement("button");
    notesButton.textContent = "+ Add Notes";
    notesButton.className = "add-note";
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
  taskAddButton.className = "task-add-btn";
  taskAddButton.addEventListener("click", () => {
    console.log(checklistDiv.id);
    addTask(checklistDiv.id);
  });

  taskCancelButton = document.createElement("button");
  taskCancelButton.textContent = "Cancel Task";
  taskCancelButton.className = "task-cancel-btn";
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
  notesAddButton.className = "notes-add-btn";
  notesAddButton.addEventListener("click", () => {
    addNote(checklistDiv.id);
  });

  notesCancelButton = document.createElement("button");
  notesCancelButton.textContent = "Cancel Note";
  notesCancelButton.className = "notes-cancel-btn";
  notesCancelButton.addEventListener("click", cancelNote);

  notesForm.append(notesInput, notesAddButton, notesCancelButton);
  notesButtonDiv.append(notesForm);
};

//-------------------------------------------------------------------------------------------------

const addTask = (taskID) => {
  const task = taskNameInput.value;
  if (!task) {
    alert("Write a task to add");
    return;
  }
  projectArray[taskID]["checklist"].push(task);
  console.log(taskID);

  taskRender(projectArray[taskID]["checklist"]);
};

const cancelTask = () => {
  checklistForm.remove();
  checklistDiv.append(checklistButton);
};

//---------------------------------------------------------------------------------------------------

const taskRender = (taskArray) => {
  checklistDiv.innerHTML = "";

  for (let i = 0; i < taskArray.length; i++) {
    taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.setAttribute("id", `${i}`);

    taskName = document.createElement("div");
    taskName.textContent = taskArray[i];
    taskName.className = "task-name";

    const deleteTask = document.createElement("div");
    deleteTask.textContent = "×";
    deleteTask.className = "delete-task";
    deleteTask.addEventListener("click", () => {
      removeTask(taskDiv.id, taskArray);
    });

    taskDiv.append(deleteTask, taskName);
    checklistDiv.append(taskDiv);
  }

  checklistDiv.append(checklistButton);
};

const removeTask = (taskID, taskArray) => {
  taskArray.splice(taskID, 1);
  taskRender(taskArray);
  console.log(taskArray);
};

//-------------------------------------------------------------------------------------------------

const addNote = (noteID) => {
  const note = notesInput.value;
  if (!note) {
    alert("Write a note to add");
    return;
  }
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

const noteRender = (notesArray) => {
  notesButtonDiv.innerHTML = "";

  for (let i = 0; i < notesArray.length; i++) {
    noteDiv = document.createElement("div");
    noteDiv.className = "note-div";
    noteDiv.setAttribute("id", `${i}`);

    const deleteNote = document.createElement("div");
    deleteNote.textContent = "×";
    deleteNote.className = "delete-note";
    deleteNote.addEventListener("click", () => {
      removeNote(noteDiv.id, notesArray);
    });

    noteName = document.createElement("div");
    noteName.textContent = notesArray[i];
    noteName.className = "note-name";

    noteDiv.append(deleteNote, noteName);
    notesButtonDiv.append(noteDiv);
  }

  notesButtonDiv.prepend(notesButton);
};

const removeNote = (noteID, notesArray) => {
  notesArray.splice(noteID, 1);
  noteRender(notesArray);
  console.log(notesArray);
};

//------------------------------------------------------------------------------------------------------

let checklistDiv;
let checklistButton;
let checklistForm;
let taskNameInput;
let taskAddButton;
let taskCancelButton;
let taskName;
let taskDiv;

let notesButtonDiv;
let notesButton;
let notesForm;
let notesInput;
let notesAddButton;
let notesCancelButton;
let noteName;
let noteDiv;

export default detailsRender;
