import './style.css';
import createProject from './project';
import createToDo from './todo';
import { pushToDo,changeToDoStatus,deployProjects,deployToDos } from './functions';

let projects = []; ///array of projects
let selectedProject = ""; //MIGHT NOT USE

console.log("HI");
let projectsDiv = document.querySelector(".projects");
let todosDiv = document.querySelector(".todos");


//EXAMPLE0  /*   TO CHANGE */
console.log("HI");
let projectExample = createProject("Project Example","This is an example description");
projects.push(projectExample)
let todoExample = createToDo("ToDo Example", "today", 0, projectExample.name);
pushToDo(projectExample,todoExample);
let todoExample1 = createToDo("ToDo Example1", "today", 0, projectExample.name);
pushToDo(projectExample,todoExample1);
console.log(projectExample);////
//EXAMPLE0
//EXAMPLE0
console.log("HI");
let anotherProjectExample = createProject("Another Project Example","This is another example description");
projects.push(anotherProjectExample)
let anotherTodoExample = createToDo("ToDo Example222", "today", 0, anotherProjectExample.name);
pushToDo(anotherProjectExample,anotherTodoExample);
let anotherTodoExample1 = createToDo("ToDo Example222", "today", 0, anotherProjectExample.name);
pushToDo(anotherProjectExample,anotherTodoExample1);
console.log(anotherProjectExample);////
//EXAMPLE0



deployProjects(projects,projectsDiv);
deployToDos(projectExample,todosDiv)