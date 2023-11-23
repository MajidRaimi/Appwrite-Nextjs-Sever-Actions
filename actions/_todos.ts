'use server';

import { createTodo } from "@/api/todo";
import { TodoModel } from "@/types";
import { revalidatePath } from "next/cache";


const createTodoAction = async (todo: string) => {
    await createTodo(todo);
    revalidatePath('/');
}




export {
    createTodoAction
}