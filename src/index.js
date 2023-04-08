import "./style.css";
import openForm from "./form";
import { topPriority, todayTask, weekTask } from "./sidebarButtons";

document.querySelector(".top-priority").addEventListener("click", topPriority);
document.querySelector(".today").addEventListener("click", todayTask);
document.querySelector(".week").addEventListener("click", weekTask);
document.querySelector("#add-project-btn").addEventListener("click", openForm);
