import { useState, useEffect} from "react";

const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [isPending,setisPending]= useState(true);
    const [error, setError] = useState(null);



    useEffect(()=>{
        const abortCont = new AbortController();



 
        fetch(url,{ signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch data")
                }
                return(res.json());
            })
            .then(data =>{
                setError(null)
                setData(data)
                setisPending(false)
            })
            .catch(e =>{
                if(e.name == "AbortError"){
                    console.log("Fetch aborted")
                }else{
                    setisPending(false)
                    setError(e.message)
                }
               
            })

            return () => abortCont.abort();

    },[url]);

    return{data,isPending,error}

}

export default useFetch;