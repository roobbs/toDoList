/* //// constructor Project 
    title
    description
    assign ToDo's 
*/
export default function createProject (projectTitle, projectDescription) {
    const name = projectTitle;
    const description = projectDescription;
    const toDos = [];

    return {name, description,toDos};
}