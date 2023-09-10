document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Excluir</button>
        `;

        listItem.querySelector(".delete-button").addEventListener("click", function () {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
    });
});
