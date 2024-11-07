const dailytask = document.querySelector('.day ul')


dailytask.addEventListener('click', (event)=>{
    const deleteBtn = event.target.textContent
    if (deleteBtn == "delete task"){
        const liTag = event.target.parentNode;//accessing the parent node
        dailytask.removeChild(liTag)// telling the parent to remove the child
        
    }
})

const addtask = document.querySelector('#add-task button')
const textinput = document.querySelector('#add-task input')

addtask.addEventListener('click', (event)=>{
    event.preventDefault();
    const myTask = textinput.value;

    const newTask = document.createElement('li')
    newTask.innerHTML = `
        <input type="checkbox" name="done" id="">
        <span class="task">${myTask}</span>
        <span class="delete">delete task</span>
    `;

    if(myTask != ""){
        dailytask.appendChild(newTask)
        textinput.value = ""
    }
    
    saveTask();
})

const searchTask = document.querySelector('#search-tasks input')
searchTask.addEventListener('input', (event)=>{
    event.preventDefault();
    const myTask = document.querySelectorAll('.task')
    const content = event.target.value
    for(let search = 0; search < myTask.length; search++){
        const task = myTask[search].textContent
        if(task.toLowerCase().includes(content)){
            myTask[search].parentElement.style.display = "block"
        }
        else{
            myTask[search].parentElement.style.display = "none"
        }
    }
})

// dailytask.addEventListener("click", function(event){
//     if(event.target.tagName === "input"){
//         event.classList.checked
//     }
// }, false)

let boxes = document. getElementsByClassName('checkbox').length;
function save() {
for(let i = 1; i <= boxes; i++){
var checkbox = document. getElementById(String(i));
localStorage. setItem("checkbox" + String(i), checkbox.checked);
}
}

function saveTask(){
    localStorage.setItem("Task", dailytask.innerHTML);
}

function showTask(){
    dailytask.innerHTML = localStorage.getItem("Task")
}
showTask();