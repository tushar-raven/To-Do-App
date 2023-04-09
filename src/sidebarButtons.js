//import { projectArray } from "./form";
import { format, getWeek } from "date-fns";
import detailsRender from "./projectDetails";

const topPriority = (projectArray) => {
  document.querySelector(".project-details").style.display = "none";
  const priorityDetails = document.querySelector(".priority-details");
  priorityDetails.style.display = "block";

  priorityDetails.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Priority Projects";
  priorityDetails.append(heading);

  for (let i = 0; i < projectArray.length; i++) {
    console.log("a");
    console.log(projectArray[i]["priority"]);
    if (projectArray[i]["priority"] === "true") {
      const priorityProject = document.createElement("div");
      priorityProject.textContent = `▶︎ ${projectArray[i]["title"]}`;
      priorityDetails.appendChild(priorityProject);

      priorityProject.addEventListener("click", () => {
        detailsRender(projectArray, i);
      });
    }
  }
};

const todayTask = (projectArray) => {
  document.querySelector(".project-details").style.display = "none";
  const priorityDetails = document.querySelector(".priority-details");
  priorityDetails.style.display = "block";
  console.log(projectArray);

  priorityDetails.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Today's Projects";
  priorityDetails.append(heading);

  for (let i = 0; i < projectArray.length; i++) {
    const todayDate = format(new Date(), "dd/MM/yyyy");
    let taskDay = projectArray[i]["deadline"];
    taskDay = format(new Date(taskDay), "dd/MM/yyyy");

    console.log(taskDay);
    console.log(todayDate);

    if (taskDay === todayDate) {
      const priorityProject = document.createElement("div");
      priorityProject.textContent = `▶︎ ${projectArray[i]["title"]}`;
      priorityDetails.appendChild(priorityProject);

      priorityProject.addEventListener("click", () => {
        detailsRender(projectArray, i);
      });
    }
  }
};

const weekTask = (projectArray) => {
  document.querySelector(".project-details").style.display = "none";
  const priorityDetails = document.querySelector(".priority-details");
  priorityDetails.style.display = "block";

  priorityDetails.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "This Week's Projects";
  priorityDetails.append(heading);

  for (let i = 0; i < projectArray.length; i++) {
    const thisWeek = getWeek(new Date());
    const taskDay = projectArray[i]["deadline"];
    const taskWeek = getWeek(new Date(taskDay));

    console.log(thisWeek);
    console.log(taskWeek);

    if (thisWeek === taskWeek) {
      const priorityProject = document.createElement("div");
      priorityProject.textContent = `▶︎ ${projectArray[i]["title"]}`;
      priorityDetails.appendChild(priorityProject);

      priorityProject.addEventListener("click", () => {
        detailsRender(projectArray, i);
      });
    }
  }
};

export { topPriority, todayTask, weekTask };
