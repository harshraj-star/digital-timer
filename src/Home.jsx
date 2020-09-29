import React from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Home() {

    const location = useLocation();

    
    
    return (
        <>
        <div className="main__class">
        <h1>
        past button press event is to visit <strong className="location__style">{location.pathname} </strong>  page
             
        </h1>
        </div>
        
        
        <div className="home__main">
        <NavLink to ="/"> <button className="button__back"> 
            Home
        </button> </NavLink>

            
        </div>
        
        
        </>
    )
}

export default Home;
