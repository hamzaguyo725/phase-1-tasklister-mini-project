document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleTodo();
    form.reset();
  });

  function handleTodo(todo) {
    todo = document.getElementById("new-task-description").value;
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", deleteToDo);
    btn.textContent = "X"
    li.textContent = `${todo} `;
    let tasks = document.getElementById("tasks");
    tasks.appendChild(li);
    li.appendChild(btn);
  }

  function deleteToDo(e){
e.target.parentNode.remove();
  }
});
