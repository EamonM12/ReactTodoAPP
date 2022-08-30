import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
    const { id } = useParams();
    const { data: todo ,error, isPending }= useFetch("http://localhost:9090/todos/"+id);
    const history = useHistory()


    const handleClick = () =>{
        console.log(todo.id)
        fetch("http://localhost:9090/todos/"+ todo.id,{
            method:"DELETE"
        }).then(() =>{
            history.push("/")
        })
    }
    
    return ( 
        
        <div className="todo-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            

            {todo &&(

                <div className="todo-details">
                
                <h2> { id } { todo.body }</h2>
                <p>{ todo.extra }</p>
                <p> {todo.date }</p>
                </div>
            )}
            <button onClick={handleClick}>Delete</button>

        </div>
     );
}
 
export default TodoDetails;