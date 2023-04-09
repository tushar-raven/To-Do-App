import "./style.css";
import openForm from "./form";
import { topPriority, todayTask, weekTask } from "./sidebarButtons";
import { getLS } from "./form";

document.querySelector(".top-priority").addEventListener("click", () => {
  let returnedArray = getLS();
  topPriority(returnedArray);
});
document.querySelector(".today").addEventListener("click", () => {
  let returnedArray = getLS();
  todayTask(returnedArray);
});
document.querySelector(".week").addEventListener("click", () => {
  let returnedArray = getLS();
  weekTask(returnedArray);
});
document.querySelector("#add-project-btn").addEventListener("click", openForm);
