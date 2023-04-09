import projectNameRender from "./sidebar";
import { updateLS, getLS } from "./form";

const openEditForm = (uniqueID, returnedArray) => {
  editProjectForm.style.display = "flex";
  editFormBox.style.display = "flex";

  document.querySelector("#edit-title").value =
    returnedArray[uniqueID]["title"];

  document.querySelector("#edit-description").value =
    returnedArray[uniqueID]["description"];

  let boolPriority = returnedArray[uniqueID]["priority"] === "true";
  document.querySelector("#edit-priority").checked = boolPriority;

  document.querySelector("#edit-date").value =
    returnedArray[uniqueID]["deadline"];

  const editDoneButton = document.querySelector("#edit-btn");
  editDoneButton.addEventListener("click", (e) => {
    editProjectDetails(e, uniqueID, returnedArray);
  });

  const editCancelButton = document.querySelector("#edit-cancel-btn");
  editCancelButton.addEventListener("click", closeEditForm);
};

const editProjectDetails = (e, uniqueID, projectArray) => {
  e.preventDefault(e);

  const newTitle = document.querySelector("#edit-title").value;
  const newDescription = document.querySelector("#edit-description").value;
  const newPriority = document.querySelector("#edit-priority").checked;
  const newDeadline = document.querySelector("#edit-date").value;

  projectArray[uniqueID]["title"] = newTitle;
  projectArray[uniqueID]["description"] = newDescription;
  projectArray[uniqueID]["priority"] = newPriority.toString();
  projectArray[uniqueID]["deadline"] = newDeadline;

  updateLS(projectArray);
  let returnedArray = getLS();

  projectNameRender(returnedArray);

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
