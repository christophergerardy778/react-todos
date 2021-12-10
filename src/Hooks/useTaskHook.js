import { useState } from "react";

export function useTaskHook(initialState) {
    const [tasks, setTasks] = useState(initialState);
    const [newTask, setNewTask] = useState('');
    const [filterText, setFilterText] = useState('');

    const searchInArray = ({ target }) => setFilterText(target.value);
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    const addNewTask = () => {
        const oldTasks = [...tasks];
        oldTasks.push({ text: newTask, isCompleted: false });
        setTasks(oldTasks);
        setNewTask('');
    }

    const removeTask = (task) => {
        const list = [...tasks];
        const index = tasks.findIndex(item => item.text === task.text);
        list.splice(index, 1);
        setTasks(list);
    }

    const setNewTaskState = ({ target }) => {
        setNewTask(target.value)
    };

    const updateTaskState = (item) => {
        const taskList = [...tasks];
        const index = tasks.findIndex(data => data.text === item.text);
        taskList[index].isCompleted = !taskList[index].isCompleted;
        setTasks(taskList);
    };

    const filterTasks = tasks.filter(item => {
        return item.text.includes(filterText)
    });

    return [
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
    ]
}