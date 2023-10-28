import './style.css';
import createProject from './project';
import createToDo from './todo';
import { pushToDo,changeToDoStatus } from './functions';

console.log("HI");

let projectExample = createProject("Project Example","This is an example description");

let todoExample = createToDo("ToDo Example", "today", 0, projectExample.name);
projectExample.toDos.push(todoExample);
let todoExample1 = createToDo("ToDo Example1", "today", 0, projectExample.name);
projectExample.toDos.push(todoExample1);

console.log("is this working?");

console.log(projectExample);


