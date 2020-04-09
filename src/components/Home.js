import React from "react"
import Nav from "./Nav"
import aof from '../aof.jpg';

const Home = ()=>{
    return (
        <div className="container">
        <Nav/>
        <div className="row  mt-5 pt-5 justify-content-center align-content-center">
          
          <div className="col-md-6  d-flex justify-content-center">
            <img src={aof} alt="age of empires" />
          </div>
        </div>
        </div>
    );
}
export default Home;