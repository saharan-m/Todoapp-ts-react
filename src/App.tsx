import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
function App() {
  const [todos,setTodos] = useState<Todo[]>([])
  const addTodoHandler = (todotext:string)=>{
    const newTodo = new Todo(todotext);
    setTodos(prevTodos=>{
      return prevTodos.concat(newTodo);
    })
  }
  const removeTodoHandler = (id:string)=>{
      setTodos((prevTodos)=>{
        return prevTodos.filter((todo)=>todo.id!==id)
      })
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos onRemoveTodo = {removeTodoHandler} items={todos}/>
    </div>
  );
}

export default App;
