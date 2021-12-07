import todo from "../models/todo";
import Todo from "./Todo/Todo";
import classes from './Todos.module.css'
const Todos: React.FC<{ items: todo[];onRemoveTodo:(id:string)=>void  }> = (props) => {
    
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todo onRemoveTodo = {props.onRemoveTodo.bind(null,item.id)} text = {item.text} id = {item.id}key={item.id}/>
      ))}
    </ul>
  );
};

export default Todos;
