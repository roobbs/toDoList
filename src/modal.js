import { createProject } from "./constructors";
import { clearContainer, deployProjects } from "./functions";

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
    let submit = document.querySelector(".project-form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            array.push(createProject(projectName.value,projectDesc.value));
            clearContainer(div);
            deployProjects(array,div);
            console.log(btnDialog);
            projectName.value="";
            projectName.value="";
            dialog.close();
        }
    });
};



/* MODAL FOR TO DO */
export let addToDoEvent = function (array,div) {
    let dialog = document.querySelector(".todoDialog"); //open dialog
    let btnDialog = document.querySelector(".addTaskBtn");
    btnDialog.addEventListener("click", () => {
        dialog.showModal();
    });
    let btnClose = document.querySelector(".closeTask");
    btnClose.addEventListener("click", () => {
        dialog.close();
    });
    /*
    let projectName = document.querySelector("#project-title");
    let projectDesc = document.querySelector("#project-description");
    let submit = document.querySelector(".project-form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            array.push(createProject(projectName.value,projectDesc.value));
            clearContainer(div);
            deployProjects(array,div);
            console.log(btnDialog);
            projectName.value="";
            projectName.value="";
            dialog.close();
        }
    });*/
};