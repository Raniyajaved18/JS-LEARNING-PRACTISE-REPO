//  select elements
const todoInput = document.getElementById('todoInput');
const addTodoBtn  = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// add todo on button click
addTodoBtn.addEventListener('click', addTodo);

// also add todo when pressing enter
todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
});
 
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return; // empty todo not allowed

    // create <li>
    const li = document.createElement('li');
    li.textContent = text;

    // complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "✔";
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // attach buttons to li
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // add li to the list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = '';

}