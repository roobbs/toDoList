/* function to push a todo into the project */
export function pushToDo (project, todo) {
    project.toDos.push(todo);
}

/* function to change status of todo */
export function changeToDoStatus (todo) {
    if (todo.status===false) {
        todo.status=true;
    } else {
        todo.status=false;
    }
}

/* //// deploy projects in screen
    take a project
    take and deploy project array
    make it show in screen
*/ 

/* d */