
const todoList = document.getElementById("todo-list");
const textInput = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];

// The Model
let data = [
    {what: "Buy potatoes", done: false},
    {what: "Buy beans", done: ture},
    {what: "Buy WC paper", done: false},
];

const render = () => {
    todoList.textContent = "";
    for (let item of data) {
        let li = document.createElement('li');
        li.textContent = item.what;
        todoList.appendChild(li);
    }
}

button.addEventListener('click', () => {
    data.push({ what: textInput.value, done: false});
    render();
})

render();