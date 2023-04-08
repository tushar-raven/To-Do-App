import { projectArray } from "./form";

import { format } from "date-fns";

const topPriority = () => {
  document.querySelector(".project-details").style.display = "none";
  const priorityDetails = document.querySelector(".priority-details");
  priorityDetails.style.display = "block";
  console.log(projectArray);

  priorityDetails.innerHTML = "";

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

const todayTask = () => {
  document.querySelector(".project-details").style.display = "none";
  const priorityDetails = document.querySelector(".priority-details");
  priorityDetails.style.display = "block";
  console.log(projectArray);

  priorityDetails.innerHTML = "";

  for (let i = 0; i < projectArray.length; i++) {
    let todayDate = format(new Date(), "dd/MM/yyyy");

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

export { topPriority, todayTask };
