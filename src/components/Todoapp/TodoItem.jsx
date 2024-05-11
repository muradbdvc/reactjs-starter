import React from 'react';
import Todo from './Todo';
function TodoItem(props) {
    console.log(props.todoitem);
    return (
        <>
           {props.todoitems.map((todoitem,index)=> (
            <Todo key={index} todo={todoitem} />
           ))}
        </>
        );
}
export default TodoItem; 
/*function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
 <div className="todo-item">
    <table class="border-separate border-spacing-2 border-collapse border border-slate-400">
        <thead>
            <tr>
            <th class="border border-slate-300">check</th>
            <th class="border border-slate-300">data</th>
            <th class="border border-slate-300">delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td  class="border border-slate-300">
                    <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                    />
            </td>
            <td class="border border-slate-300"><p>{task.text}</p></td>
            <td class="border border-slate-300">
                    <button onClick={() => deleteTask(task.id)}>
                    X
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
 </div>
 );
}
export default TodoItem;*/