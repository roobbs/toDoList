import './style.css';
import { createProject, createToDo } from './constructors.js';
import { pushToDo, changeToDoStatus, deployProjects, deployAllToDos } from './functions';
import { addProjectEvent, addToDoEvent } from './modal';

export let projects = []; ///array of projects
let projectsDiv = document.querySelector(".projects");
let todosDiv = document.querySelector(".todos");

//EXAMPLE0  /*   TO CHANGE */
console.log("HI");
let projectExample = createProject("Project Example 1", "This is description 1");
projects.push(projectExample)
let todoExample = createToDo("Task 1 for project 1", "today", "low");
pushToDo(projectExample, todoExample);
let todoExample1 = createToDo("Task 2 for project 1", "today", "medium");
pushToDo(projectExample, todoExample1);
console.log(projectExample);////
//EXAMPLE0
//EXAMPLE0
console.log("HI");
let anotherProjectExample = createProject("Another Project Example", "This is description 2");
projects.push(anotherProjectExample)
let anotherTodoExample = createToDo("Task 1 for Project 2", "today", "high", anotherProjectExample.name);
pushToDo(anotherProjectExample, anotherTodoExample);
let anotherTodoExample1 = createToDo("Task 2 for Project 2", "today", "low", anotherProjectExample.name);
pushToDo(anotherProjectExample, anotherTodoExample1);
console.log(anotherProjectExample);////
//EXAMPLE0

//////////////Use LocalStorage 
//const projectsToJson = JSON.stringify(projects);
//localStorage.setItem('projects', projectsToJson);
const localStorageValue = localStorage.getItem('projects');
if (localStorageValue !== null) {
    const retrievedProjects = JSON.parse(localStorageValue);
    projects = retrievedProjects;
}

let allTasksDiv = document.querySelector(".allTasks");
allTasksDiv.addEventListener("click", () => {
    const divs = document.querySelectorAll(".projectContainer");
    divs.forEach((div) => div.classList.remove("selectedProject"));
    allTasksDiv.classList.add("selectedProject");
    deployAllToDos(projects, todosDiv);
});

deployProjects(projects, projectsDiv);
deployAllToDos(projects, todosDiv);

addProjectEvent(projects, projectsDiv);
addToDoEvent(projects);