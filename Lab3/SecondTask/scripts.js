function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        this.parentElement.classList.toggle("checked", this.checked);
    };
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}