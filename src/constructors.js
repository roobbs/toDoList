/* //// constructor ToDo
    title
    dueDate
    priority   
    checklist(status);
    Assigned Project
*/

//eliminate default values if not used
export function createToDo (todoTitle, todoDate, todoPriority) {
    const name = todoTitle;
    const date = todoDate;
    const priority = todoPriority;
    const status = false;
    return {name, date, priority, status};
}

/* //// constructor Project 
    title
    description
    assign ToDo's 
*/
export function createProject (projectTitle, projectDescription) {
    const name = projectTitle;
    const description = projectDescription;
    const toDos = [];

    return {name, description,toDos};
}