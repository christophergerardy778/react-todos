import './App.css';
import React from "react";
import { TodoCounter } from "../Todo/TodoCounter";
import { TodoList } from "../Todo/TodoList";
import { TodoSearch } from "../Todo/TodoSearch";
import { TodoForm } from "../Todo/TodoForm";
import { TodoProvider } from '../Context/TodoContext';

function App() {
    return (
        <TodoProvider>
            <React.Fragment>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className='text-center'>
                                        Todo app with react
                                    </h1>

                                    <TodoCounter />
                                </div>
                                <div className="col-8 mx-auto">
                                    <TodoSearch />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-8 mx-auto">
                                    <TodoList />
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <TodoForm />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </TodoProvider>
    );
}

export default App;
