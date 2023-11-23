

import { TodoModel } from '@/types'
import { Trash } from 'lucide-react'



interface TodoItemProps {
    todo: TodoModel
}

const TodoItem = ({ todo }: TodoItemProps) => {
    return (
        <div key={todo.id} className='flex items-center py-2 gap-2'>
            <input type="checkbox" className='form-checkbox' />
            <p className='flex-1'>{todo.title}</p>
            <button className='btn btn-error rounded-full text-white text-sm'>
                <Trash className='text-sm w-4' />
            </button>
        </div>
    )
}

export default TodoItem
