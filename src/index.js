import './style.css';
import {createProject,createToDo} from './constructors.js';
import { pushToDo,changeToDoStatus,deployProjects,deployToDos, deployAllToDos } from './functions';
//import { addProjectEvent } from './modal';

export let projects = []; ///array of projects
let projectsDiv = document.querySelector(".projects");
let todosDiv = document.querySelector(".todos");

//EXAMPLE0  /*   TO CHANGE */
console.log("HI");
let projectExample = createProject("Project Example 1","This is description 1");
projects.push(projectExample)
let todoExample = createToDo("Task 1 for project 1", "today", "low", projectExample.name);
pushToDo(projectExample,todoExample);
let todoExample1 = createToDo("Task 2 for project 1", "today", "medium", projectExample.name);
pushToDo(projectExample,todoExample1);
console.log(projectExample);////
//EXAMPLE0
//EXAMPLE0
console.log("HI");
let anotherProjectExample = createProject("Another Project Example","This is description 2");
projects.push(anotherProjectExample)
let anotherTodoExample = createToDo("Task 1 for Project 2", "today", "high", anotherProjectExample.name);
pushToDo(anotherProjectExample,anotherTodoExample);
let anotherTodoExample1 = createToDo("Task 2 for Project 2", "today", "low", anotherProjectExample.name);
pushToDo(anotherProjectExample,anotherTodoExample1);
console.log(anotherProjectExample);////
//EXAMPLE0

let allTasksDiv = document.querySelector(".allTasks");
allTasksDiv.addEventListener("click", ()=> {
    const divs = document.querySelectorAll(".projectContainer");
    divs.forEach( (div)=> div.classList.remove("selectedProject"));
    allTasksDiv.classList.add("selectedProject");
    deployAllToDos(projects,todosDiv);
});

deployProjects(projects,projectsDiv);
deployAllToDos(projects,todosDiv);
//addProjectEvent(projects,projectsDiv);


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
            let newProject= createProject(projectName.value,projectDesc.value);
            projects.push(newProject);
            projectsDiv.innerHTML="";
            deployProjects(projects,projectsDiv);
            console.log(projects);
            projectName.value="";
            projectDesc.value="";
        }
    });

addProjectEvent();