import "./style.css";
import openForm from "./form";
import topPriority from "./sidebarButtons";
import { todayTask } from "./sidebarButtons";

document.querySelector(".top-priority").addEventListener("click", topPriority);
document.querySelector(".today").addEventListener("click", todayTask);
document.querySelector("#add-project-btn").addEventListener("click", openForm);
