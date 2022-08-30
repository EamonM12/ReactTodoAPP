import { Link } from "react-router-dom"

const Todolist = ({todos}) => {
    
    return ( 
        <div className="todo-list">
            {todos.map((todos) =>(

            <div className="todo-bar" key={todos.id}>
                <Link to={`/todos/${todos.id}`}>

                <h2 align="left">{todos.id} {todos.title}</h2>
                <p>Made on {todos.date}</p>
                
                </Link>
            </div>
            ))}
            
        </div>

     );
}
 
export default Todolist;