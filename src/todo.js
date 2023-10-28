/* //// constructor ToDo
    title
    dueDate
    priority   
    checklist(status);
    Assigned Project
*/

//eliminate default values if not used
export default function createToDo (todoTitle, todoDate="today", todoPriority=0, project) {
    const name = todoTitle;
    const date = todoDate;
    const priority = todoPriority;
    const belongTo = project;
    const status = false;

    return {name, date, priority, belongTo, status};
}