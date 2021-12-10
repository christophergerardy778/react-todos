import React from "react";
import { TodoContext } from "../Context/TodoContext";

export function TodoForm() {
    const { 
        newTask, 
        setNewTaskState, 
        addNewTask 
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <h1>
                Create new todo
            </h1>

            <p>
                add todos to list
            </p>

            <input
                type="text"
                className='form-control'
                placeholder='Name of todo'
                value={newTask}
                onChange={setNewTaskState}
            />

            <button 
                className='btn btn-primary btn-block mt-3' 
                onClick={addNewTask}
            >
                Add
            </button>
        </React.Fragment>
    );
}
