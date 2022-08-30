
import Todolist from "./todo_list";
import useFetch from "./useFetch";


const Home = () => {

    const {data, isPending, error} = useFetch("http://localhost:9090/todos")

    
  
    return ( 
        <div className="Home">
            {error && <div>{ error }</div>}
            {isPending && <div> Loading..</div>}
            { data&&<Todolist todos={data}  />}
        </div> 
    
     );
}
 
export default Home; 