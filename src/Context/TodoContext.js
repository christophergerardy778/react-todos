import React from "react";
import { useTaskHook } from "../Hooks/useTaskHook";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const [
        tasks,
        filterTasks,
        newTask,
        filterText,
        completedTasks,
        searchInArray,
        addNewTask,
        removeTask,
        setNewTaskState,
        updateTaskState,
    ] = useTaskHook([]);

    return(
        <TodoContext.Provider value={{
            tasks,
            filterTasks,
            newTask,
            filterText,
            completedTasks,
            searchInArray,
            addNewTask,
            removeTask,
            setNewTaskState,
            updateTaskState,
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }