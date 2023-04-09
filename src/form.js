import projectNameRender from "./sidebar";

let returnedArray = getLS();
if (returnedArray) {
  projectNameRender(returnedArray);
}

const openForm = () => {
  addProjectForm.style.display = "flex";
  formBox.style.display = "flex";

  const cancelButton = document.querySelector("#cancel-btn");
  cancelButton.addEventListener("click", closeForm);

  const addButton = document.querySelector("#add-btn");
  addButton.addEventListener("click", addFormDetails);
};

const closeForm = (e) => {
  e.preventDefault();
  addProjectForm.reset();
  addProjectForm.style.display = "none";
  formBox.style.display = "none";
};

const addFormDetails = (e) => {
  e.preventDefault(e);

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const priority = document.querySelector("#priority").checked;
  const deadline = document.querySelector("#date").value;

  if (!title || !description || !deadline) {
    alert("please fill all the details");
    return;
  }

  addProjectForm.reset();
  addProjectForm.style.display = "none";
  formBox.style.display = "none";

  const project = Project(
    `${title}`,
    `${description}`,
    `${priority}`,
    `${deadline}`
  );

  let returnedArray = getLS();
  if (!returnedArray) {
    projectArray.push(project);
    updateLS(projectArray);
  } else {
    returnedArray.push(project);
    updateLS(returnedArray);
  }
  returnedArray = getLS();

  projectNameRender(returnedArray);
};

function updateLS(projectArray) {
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

function getLS() {
  const a = localStorage.getItem("projectArray");
  return JSON.parse(a);
}

let projectArray = [];

const Project = (
  title,
  description,
  priority,
  deadline,
  checklist = [],
  notes = []
) => {
  return { title, description, priority, deadline, checklist, notes };
};

const addProjectForm = document.querySelector(".form");
const formBox = document.querySelector(".form-box");

export default openForm;
export { projectArray };
export { updateLS, getLS };
