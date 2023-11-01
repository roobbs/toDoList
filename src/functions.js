/* function to push a todo into the project */
export function pushToDo(project, todo) {
    project.toDos.push(todo);
}

/* function to change status of todo */
export function changeToDoStatus(todo) {
    if (todo.status === false) {
        todo.status = true;
    } else {
        todo.status = false;
    }
}

/* clear content of container */
export function clearContainer(div) {
    div.innerHTML = "";
}

/* //// deploy projects in screen */
export function deployProjects(array, div) {
    let todosDiv = document.querySelector(".todos");
    for (let i = 0; i < array.length; i++) {
        let bigCont = document.createElement("div");
        bigCont.classList.add("bigProjectContainer");
        div.appendChild(bigCont);

        let container = document.createElement("div");
        container.classList.add("projectContainer");
        bigCont.appendChild(container);

        let projectName = document.createElement("div");
        projectName.classList.add("projectName");
        projectName.textContent = array[i].name;
        container.appendChild(projectName);
        let projectDesc = document.createElement("div");
        projectDesc.classList.add("projectDesc");
        projectDesc.textContent = array[i].description;
        container.appendChild(projectDesc);

        container.addEventListener("click", () => {
            const divs = document.querySelectorAll(".projectContainer");
            divs.forEach((div) => div.classList.remove("selectedProject"));
            container.classList.add("selectedProject");

            clearContainer(todosDiv)
            deployToDos(array[i], todosDiv);
        });
        let dlt = document.createElement("button");
        dlt.classList.add("deleteProject");
        dlt.textContent = "🗑";
        bigCont.appendChild(dlt);

        dlt.addEventListener("click", () => {
            array.splice(i, 1);
            clearContainer(div);
            console.log(div);
            console.log(array);
            deployProjects(array, div);
            let newDiv = document.querySelector(".todos");
            deployAllToDos(array, newDiv);

            let projectsToJson = JSON.stringify(array);
            localStorage.setItem('projects', projectsToJson);
        });

    }
}

/* //// deploy toDos of a project in screen */
export function deployToDos(project, div, createBtn = false) {
    for (let i = 0; i < project.toDos.length; i++) {
        let container = document.createElement("div");
        container.classList.add("todoContainer");
        div.appendChild(container);

        let btn = document.createElement("button");
        btn.classList.add("todoCheck");
        if (project.toDos[i].status === false) {
            btn.textContent = "❌";
            btn.classList.add("false");
            container.style.opacity = "1";
        } else {
            btn.textContent = "✔";
            btn.classList.add("true");
            container.style.opacity = ".5";
        }
        container.appendChild(btn);
        let todoName = document.createElement("div");
        todoName.classList.add("todoName");
        todoName.textContent = project.toDos[i].name;
        container.appendChild(todoName);
        let todoDate = document.createElement("div");
        todoDate.classList.add("todoDate");
        todoDate.textContent = project.toDos[i].date;
        container.appendChild(todoDate);
        switch (project.toDos[i].priority) {
            case "low":
                container.style.borderLeft = "8px solid green";
                break;
            case "medium":
                container.style.borderLeft = "8px solid #ffcc00";
                break;
            case "high":
                container.style.borderLeft = "8px solid #c40000";
                break;
        }
        btn.addEventListener("click", () => {
            if (project.toDos[i].status === false) {
                changeToDoStatus(project.toDos[i]);
                btn.textContent = "✔";
                btn.classList.add("true");
                btn.classList.remove("false");
                container.style.opacity = ".5";
            } else {
                changeToDoStatus(project.toDos[i]);
                btn.textContent = "❌";
                btn.classList.add("false");
                btn.classList.remove("true");
                container.style.opacity = "1";
            }
        });
        if (createBtn === false) {
            let dlt = document.createElement("button");
            dlt.classList.add("deleteTask");
            dlt.textContent = "🗑";
            container.appendChild(dlt);
            dlt.addEventListener("click", () => {
                project.toDos.splice(i, 1);
                clearContainer(div);
                deployToDos(project, div);
            });
        }

    }
}

export function deployAllToDos(array, div) {
    clearContainer(div);
    for (let i = 0; i < array.length; i++) {
        deployToDos(array[i], div, true);
    }
}