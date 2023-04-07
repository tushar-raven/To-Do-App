import openEditForm from "./editForm";
import detailsRender from "./projectDetails";

const projectNameRender = (projectArray) => {
  const projectList = document.querySelector(".project-list");
  projectList.innerHTML = "";
  let nameDiv;

  for (let i = 0; i < projectArray.length; i++) {
    nameDiv = document.createElement("div");
    nameDiv.className = "name-div";
    nameDiv.setAttribute("id", `${i}`);

    const projectName = document.createElement("p");
    projectName.textContent = `${projectArray[i]["title"]}`;
    projectName.setAttribute("id", `${i}`);
    projectName.addEventListener("click", (e) => {
      detailsRender(projectArray, e.target.id);
    });

    projectList.prepend(nameDiv);

    const editButton = document.createElement("button");
    editButton.setAttribute("id", `${i}`);
    editButton.textContent = "Edit";
    editButton.addEventListener("click", (e) => {
      openEditForm(e.target.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteProject(projectArray, nameDiv);
    });

    nameDiv.append(projectName, editButton, deleteButton);
  }

  if (!nameDiv) {
    detailsRender(projectArray, "x");
    return;
  }
  detailsRender(projectArray, nameDiv.id);
};

const deleteProject = (projectArray, nameDiv) => {
  const uniqueID = nameDiv.id;
  projectArray.splice(uniqueID, 1);
  nameDiv.remove();

  projectNameRender(projectArray);
  console.log(projectArray);
};

export default projectNameRender;
