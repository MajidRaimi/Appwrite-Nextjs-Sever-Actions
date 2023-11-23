'use server'

import { database } from "@/lib";
import { TodoModel } from "@/types";
import { ID } from "appwrite";


const getTodos = async () => {
    try {
        const response = await database.listDocuments(
            '653fa564336ed2d5516c',
            '65479220a40077b2b884'
        );
        return { todos: response.documents as TodoModel[] };
    } catch (e) {
        return { error: e }
    }
}

const createTodo = async (todo: string) => {
    try {
        const response = await database.createDocument(
            '653fa564336ed2d5516c',
            '65479220a40077b2b884',
            ID.unique(),
            {
                title: todo,
                isDone: false
            }
        );
        return { todo: response as TodoModel };
    } catch (e) {
        return { error: e }
    }
}



export {
    getTodos, createTodo
}