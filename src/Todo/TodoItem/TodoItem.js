import './TodoItem.css';
import React from "react";

export function TodoItem({item, updateTaskState, removeTask}) {
    return (
        <React.Fragment>
            <li className='list-group-item d-flex align-items-center justify-content-between'>
                <p className={`mb-0 ${item.isCompleted && 'text-completed'}`}>
                    {item.text}
                </p>

                { !item.isCompleted ?
                    (
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                checked={item.isCompleted}
                                onChange={() => updateTaskState(item)}
                            />
                        </div>
                    ):
                    (
                        <button className='btn btn-danger' onClick={removeTask}>
                            Delete
                        </button>
                    )
                }
            </li>
        </React.Fragment>
    );
}
