import projectNameRender from "./sidebar";

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

  projectArray.push(project);
  console.log(projectArray);

  projectNameRender(projectArray);
};

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
