import { projectArray } from "./form";
import projectNameRender from "./sidebar";

const openEditForm = (uniqueID) => {
  editProjectForm.style.display = "flex";
  editFormBox.style.display = "flex";

  document.querySelector("#edit-title").value = projectArray[uniqueID]["title"];

  document.querySelector("#edit-description").value =
    projectArray[uniqueID]["description"];

  let boolPriority = projectArray[uniqueID]["priority"] === "true";
  document.querySelector("#edit-priority").checked = boolPriority;

  document.querySelector("#edit-date").value =
    projectArray[uniqueID]["deadline"];

  const editDoneButton = document.querySelector("#edit-btn");
  editDoneButton.addEventListener("click", (e) => {
    editProjectDetails(e, uniqueID);
  });

  const editCancelButton = document.querySelector("#edit-cancel-btn");
  editCancelButton.addEventListener("click", closeEditForm);
};

const editProjectDetails = (e, uniqueID) => {
  e.preventDefault(e);

  const newTitle = document.querySelector("#edit-title").value;
  const newDescription = document.querySelector("#edit-description").value;
  const newPriority = document.querySelector("#edit-priority").checked;
  const newDeadline = document.querySelector("#edit-date").value;

  projectArray[uniqueID]["title"] = newTitle;
  projectArray[uniqueID]["description"] = newDescription;
  projectArray[uniqueID]["priority"] = newPriority.toString();
  projectArray[uniqueID]["deadline"] = newDeadline;

  projectNameRender(projectArray);

  editProjectForm.style.display = "none";
  editFormBox.style.display = "none";
};

const closeEditForm = (e) => {
  e.preventDefault();
  editProjectForm.reset();
  editProjectForm.style.display = "none";
  editFormBox.style.display = "none";
};

const editProjectForm = document.querySelector(".edit-form");
const editFormBox = document.querySelector(".edit-form-box");

export default openEditForm;
