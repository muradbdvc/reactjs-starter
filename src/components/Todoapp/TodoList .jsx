// import React from 'react'
import React, { useState } from 'react'
import TodoItem from './TodoItem'
import NewTodo from './NewTodo'

const dummytodoitems =[
    {
        id:1,
       title: "todo1",
       desc:"this is desc 1"
    },
    {
        id:2,
        title:"todo2",
        desc:"this is desc 2"}
];
function TodoList(props) {
    const [todoitems, settodoitems] =useState(dummytodoitems);

    const NewTodo = (newTodo) => {
        console.log(newTodo);
    }
    return ( 
        <>
        <NewTodo onTodo={NewTodo} />
        <TodoItem todoitems={todoitems} />
        </>
    );
}
export default TodoList;
/*function TodoList() {
    const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctor Appointment',
    completed: true
    },
    {
    id: 2,
    text: 'Meeting at School',
    completed: false
    }
    ]);
    
    const [text, setText] = useState('');
   function addTask(text) {

        const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    setTasks([...tasks, newTask]);
    setText('');
    }

   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }

   function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
            return {...task, completed: !task.completed};
            } else {
            return task;
            } 
        }));
    }

   return (
    <div className="todo-list">
    {tasks.map(task => (

    <TodoItem 
        key={task.id} 
        task={task}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted} 
    />
    ))}
    
   <input
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button onClick={() => addTask(text)}>Add</button>
    </div>
    );
   }
   export default TodoList;*/