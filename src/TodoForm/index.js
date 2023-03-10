import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal

    }= React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return(
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder='Escribe una nueva tarea'
            />
            <div className="TodoForm-buttonContainer">
                <button
                type='button'
                className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>  
                <button
                type='sumbit'
                className="TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button> 
            </div>
        </form>
    );
}

export { TodoForm };