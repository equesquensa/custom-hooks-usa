import { useReducer,useEffect } from "react"
import { todoReducer } from "./todoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) || [])
      }, [todos])
      
        const handleTodo = (todo) => {
            const action = {
                type: '[TODO] add todo',
                payload: todo,
            }
            dispatch( action)
        }
    
        const handleDeleteTodo = (id) => {
            const action = {
                type: '[TODO] remove todo',
                payload: id,
            }
            dispatch (action)
        }
    
        const handleToggleTodo = (id) => {
            const action = {
                type: '[TODO] toggle todo',
                payload: id,
            }
            dispatch (action)
        }

        return {
            todos,
            todosCount: todos.length,
            pendingTodos: todos.filter(todo => !todo.done).length,
            handleDeleteTodo,
            handleTodo,
            handleToggleTodo
        }

}
