import { Models } from "appwrite";


interface TodoModel extends Models.Document {
    title: string;
    isDone: boolean;
}

export default TodoModel;