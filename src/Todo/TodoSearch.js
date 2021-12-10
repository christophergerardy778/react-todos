import React from "react";
import { TodoContext } from "../Context/TodoContext";

export function TodoSearch() {
    const {
        filterText, 
        searchInArray
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <input
                value={filterText}
                onChange={searchInArray}
                className='form-control'
                placeholder='Search todo'
            />
        </React.Fragment>
    );
}
