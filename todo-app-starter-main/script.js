// localStorage.setItem('name', 'rafi');

// const name = localStorage.getItem('name');
// console.log(name);

// localStorage.removeItem('name')

// localStorage.setItem('person', JSON.stringify([{name: 'mir', age: '62',},{name: 'abdul', age: '60'}]))

//get local storage item
// const person = localStorage.getItem('person');
// const value = JSON.parse(person)

// console.log(value)

const getElement = (id) =>{
     const Element = document.getElementById(id)
     return Element;
}

//project work
const handleSubmit = () =>{
     const todos = JSON.parse(localStorage.getItem('todo'))  
    const input = getElement('inputFild').value;
    input.value = '';
    if(!todos){

     const todoList = [
          {
               title: input,
               completed: false,
          },
         ];
          localStorage.setItem('todo', JSON.stringify(todoList))
    }else{
     const todoList = [
          ...todos,
          {
               title: input,
               completed: false,
          },
         ];
          localStorage.setItem('todo', JSON.stringify(todoList))
    }
    render();
}

const render = () =>{
    const todos = JSON.parse(localStorage.getItem('todo'));
    const ul = getElement('todo-list');

    ul.innerHTML = '';

    todos.forEach(item => {    
     const li = document.createElement('li');
     li.classList.add('py-2')
     li.innerText = item.title;
     ul.appendChild(li);
    });
}

render();

const handleDelete = () =>{
     localStorage.removeItem('todo');
     render();
};