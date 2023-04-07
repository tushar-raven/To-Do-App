const openEditForm = (uniqueID) => {
  editProjectForm.style.display = "flex";

  document.querySelector("#edit-title").value = projectArray[uniqueID]["title"];

  document.querySelector("#edit-description").value =
    projectArray[uniqueID]["description"];

  let boolPriority = projectArray[uniqueID]["priority"] === "true";
  document.querySelector("#edit-priority").checked = boolPriority;

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

  projectArray[uniqueID]["title"] = newTitle;
  projectArray[uniqueID]["description"] = newDescription;
  projectArray[uniqueID]["priority"] = newPriority.toString();

  projectNameRender(projectArray);

  editProjectForm.style.display = "none";
};

const closeEditForm = (e) => {
  e.preventDefault();
  editProjectForm.reset();
  editProjectForm.style.display = "none";
};

const editProjectForm = document.querySelector(".edit-form");

export default openEditForm;
