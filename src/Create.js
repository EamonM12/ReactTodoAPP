import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle]= useState("");
    const [body, setBody]= useState("");
    const [date, setDate]= useState("");
    const [id, setId]= useState("");
    const [isPending,setisPending]= useState(false);
    const history = useHistory();

    const handleSub = (e) => {
        e.preventDefault();
       
        setisPending(true);

        const todo= { title,body,date,id}
        fetch("http://localhost:9090/todos",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(todo)

        }).then(() =>{
            
            setisPending(false);
            history.push("/")
        })

      
    }

    return ( 
        <div className="create">
            <h1>Create Page</h1>
            <form onSubmit={handleSub} >
            <label>Todo ID(must be unique):</label>
                <input type="text" required value = {id} onChange = {(e) => setId(e.target.value)}></input>

                <label>Todo Title:</label>
                <input type="text" required value = {title} onChange = {(e) => setTitle(e.target.value)}></input>

                <label>Todo Extra details:</label>
                <textarea required value = {body} onChange = {(e) => setBody(e.target.value)}></textarea>

                <label>Todo Date:</label>
                <input type="text" required value = {date} onChange = {(e) => setDate(e.target.value)}></input>

                {!isPending && <button>Add Todo</button>}
                {isPending && <button disabled>Adding Todo...</button>}
            </form>
        </div>
     );
}
 
export default Create;