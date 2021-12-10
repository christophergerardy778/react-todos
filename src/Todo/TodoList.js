import React from "react";
import { TodoContext } from "../Context/TodoContext";
import { TodoItem } from '../Todo/TodoItem/TodoItem';

export function TodoList() {
    const { 
        filterTasks, 
        removeTask, 
        updateTaskState 
    } = React.useContext(TodoContext);
    
    return (
        <ul className='list-group mt-4'>
            {filterTasks.map(item => (
                <TodoItem
                    key={item.text}
                    item={item}
                    updateTaskState={() => updateTaskState(item)}
                    removeTask={() => removeTask(item)}
                />
            ))}
        </ul>
    );
}
