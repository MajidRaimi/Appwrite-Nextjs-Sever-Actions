
import { getTodos } from "@/api/todo"
import { Header, InputForm, TodoItem } from "./components"

const page = async () => {

  const { todos } = await getTodos()

  return (
    <div className='p-12 min-h-screen'>
      <Header />

      <InputForm />

      {
        todos?.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />))
      }

    </div>
  )
}

export default page
