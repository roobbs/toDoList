import { createProject, createToDo } from "./constructors";
import { clearContainer, deployProjects, pushToDo, deployAllToDos } from "./functions";

export let addProjectEvent = function (array, div) {
    let dialog = document.querySelector(".projectDialog"); //open dialog
    let btnDialog = document.querySelector(".addProjectBtn");
    btnDialog.addEventListener("click", () => {
        dialog.showModal();
    });
    let btnClose = document.querySelector(".closeProject");
    btnClose.addEventListener("click", () => {
        projectName.value = "";
        projectDesc.value = "";
        dialog.close();
    });
    let projectName = document.querySelector("#project-title");
    let projectDesc = document.querySelector("#project-description");
    let submit = document.querySelector(".project-form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            let newObject = createProject(projectName.value, projectDesc.value);
            array.push(newObject);

            let projectsToJson = JSON.stringify(array);
            localStorage.setItem('projects', projectsToJson);

            clearContainer(div);
            deployProjects(array, div);
            console.log(btnDialog);
            projectName.value = "";
            projectDesc.value = "";
            dialog.close();
            addToDoEvent(array);

        }
    });
};



/* MODAL FOR TO DO */
export let addToDoEvent = function (array) {
    let dialog = document.querySelector(".todoDialog");
    let btnDialog = document.querySelector(".addTaskBtn");
    btnDialog.addEventListener("click", () => {
        dialog.showModal();
    });
    let btnClose = document.querySelector(".closeTask");
    btnClose.addEventListener("click", () => {
        todoName.value = "";
        todoDate.value = "";
        todoPriority.value = "low";
        dialog.close();
    });

    let todoName = document.querySelector("#todo-title");
    let todoDate = document.querySelector("#todo-date");
    let todoPriority = document.querySelector("#todo-priority");
    let todoProject = document.querySelector("#todo-project");
    todoProject.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", array[i].name);
        option.textContent = array[i].name;
        todoProject.appendChild(option);
    }

    let submit = document.querySelector(".todo-form").addEventListener("submit", (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            let newToDo = createToDo(todoName.value, todoDate.value, todoPriority.value);
            let newProject;
            for (let i = 0; i < array.length; i++) {
                if (todoProject.value === array[i].name) {
                    newProject = array[i];
                }
            }
            pushToDo(newProject, newToDo);
            console.log(newProject.toDos)
            let newDiv = document.querySelector(".todos");
            clearContainer(newDiv);
            deployAllToDos(array, newDiv);

            let projectsToJson = JSON.stringify(array);
            localStorage.setItem('projects', projectsToJson);

            todoName.value = "";
            todoDate.value = "";
            todoPriority.value = "low";
            dialog.close();
        }
    });
};