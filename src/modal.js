/*import { createProject } from "./constructors";
import { deployProjects } from "./functions";
import { projects } from "./";

export let addProjectEvent = function (array,div) {
    let dialog = document.querySelector(".projectDialog"); //open dialog
    let btnDialog = document.querySelector(".addProjectBtn");
    btnDialog.addEventListener("click", () => {
        dialog.showModal();
    });
    let btnClose = document.querySelector(".closeProject");
    btnClose.addEventListener("click", () => {
        dialog.close();
    });
    let projectName = document.querySelector("#project-title");
    let projectDesc = document.querySelector("#project-description");
    let submit = document.querySelector(".addProject").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            array.push(createProject(projectName.value,projectDesc.value));
            deployProjects(array,div);
            console.log(btnDialog);
            projectName.value="";
            projectName.value="";
        }
    });
}
*/