import { Link } from "react-router-dom";

const Navbar = () => {

    return (  
        <nav className="navbar"> 
        <h1>Eamons To do list</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color:"white",
                backgroundColor:"#0add2d",
                borderRadius:"8px"
            }}>New Entry</Link>
        </div>
        </nav>
    );

}
 
export default Navbar;