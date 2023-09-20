            
let todoList = JSON.parse(localStorage.getItem('todoList'))||
[{name:'Add Your Todo',
  dueDate:'Add the Date'
}];



renderTodoList();

function renderTodoList(){
    let todoHTML = ''; 
    todoList.forEach(function(todoObject,index){
        const {name,dueDate}=todoObject; 
        const html = 
        `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button  class = "todo-delete-button js-todo-delete-button" 
            onclick = localStorage.removeItem();
        >Delete</button>
        `;
        todoHTML += html;
        console.log(todoHTML);   
    });
    document.querySelector('.js-todo-list').innerHTML=todoHTML; 

    document.querySelectorAll('.js-todo-delete-button')
    .forEach((deleteButton,index) =>{
        deleteButton.addEventListener('click',()=>{
            todoList.splice(index,1); 
            renderTodoList();
            addToSTorage();   
        });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click',() => {
    addTodo();
})

function addTodo(){
    let inputElement = document.querySelector('.js-todo-input'); 
    let name = inputElement.value; 
    let dateInputElement = document.querySelector('.js-todo-date-input'); 

    console.log(typeof(name));
    console.log(typeof(dateInputElement));

    let dueDate = dateInputElement.value;
    if(name == ''){
        window.alert("Please Fill the required Field Name and Date");
    }
    else{
        todoList.push({name,dueDate}); 
    }
    

    inputElement.value='';  
    dueDate.value=''; 
    renderTodoList(); 

    addToSTorage();
}

function addToSTorage() {
    localStorage.setItem('todoList',JSON.stringify(todoList));
}
