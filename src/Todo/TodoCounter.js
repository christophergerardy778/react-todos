import React from "react";
import { TodoContext } from "../Context/TodoContext";

export function TodoCounter() {
    const {
        tasks
    } = React.useContext(TodoContext);

    const completedTasks = tasks.filter(item => item.isCompleted).length;

    return (
        <React.Fragment>
            <h6 className='text-center card-subtitle text-muted font-weight-normal mb-4 mt-4'>
                Completed: {completedTasks} of {tasks.length}
            </h6>
        </React.Fragment>
    )
}
