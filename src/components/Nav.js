import React from "react"
import {   Link } from "react-router-dom";
const Nav = ()=>{
    return (
        <div className="">
        <ul className="row menu my-2 float-right">
        <li className="inline-block mx-2 ">
          <Link to="/">Home</Link>
        </li>
        <li className="inline-block mx-2">
          <Link to="/units">Units</Link>
        </li>
      </ul>
      </div>
    );
}
export default Nav;