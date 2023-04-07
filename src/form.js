import projectNameRender from "./sidebar";

const openForm = () => {
  addProjectForm.style.display = "flex";

  const cancelButton = document.querySelector("#cancel-btn");
  cancelButton.addEventListener("click", closeForm);

  const addButton = document.querySelector("#add-btn");
  addButton.addEventListener("click", addFormDetails);
};

const closeForm = (e) => {
  e.preventDefault();
  addProjectForm.reset();
  addProjectForm.style.display = "none";
};

const addFormDetails = (e) => {
  e.preventDefault(e);

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const priority = document.querySelector("#priority").checked;

  if (!title || !description) {
    alert("please fill all the details");
    return;
  }

  addProjectForm.reset();
  addProjectForm.style.display = "none";

  const project = Project(`${title}`, `${description}`, `${priority}`);

  projectArray.push(project);
  console.log(projectArray);

  projectNameRender(projectArray);
};

let projectArray = [];

const Project = (
  title,
  description,
  priority,
  checklist = [],
  notes = [],
  deadline
) => {
  return { title, description, priority, checklist, notes, deadline };
};

const addProjectForm = document.querySelector(".form");

export default openForm;
export { projectArray };
