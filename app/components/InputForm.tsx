'use client';
import { createTodoAction } from '@/actions/_todos';
import { useState, useTransition } from 'react';


const InputForm = () => {
    const [todo, setTodo] = useState('');
    const [isAdding, startAdding] = useTransition();
    const [isDeleting, startDeleting] = useTransition();
    const onAdd = () => {

    }



    return (
        <div className='flex items-center py-2 gap-2'>
            <input type="text"
                className='flex-1 rounded-lg form-input'
                placeholder='Add a todo'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className='btn btn-primary rounded-lg text-white' onClick={() => startAdding(() => createTodoAction(todo))}>Add</button>
        </div>
    )
}

export default InputForm
