import React , {Component} from "react";
import {  Link,useParams
} from "react-router-dom";
import { connect }  from 'react-redux';
import Nav from "./Nav";

function UnitDetail (props){
    let { id } = useParams();
    id = parseInt(id);
    let chosen = props.data.filter( item => item.id === id)
    chosen = chosen[0];
    console.log(id)
    console.log(chosen)
        return (
            <div className="App">
            <div className="container">
            <Nav/>
            <div className="row filter  mt-5 pt-5 align-content-center d-flex">
        <h3>{id} - {chosen.name}</h3>

            <table className="table table-striped">

            <tbody>
        <tr>
        <th>ID</th>
            <td>{id}</td>
        </tr>
        <tr>
          <th>Name</th>
            <td>{chosen.name}</td>

        </tr>
        <tr>
          <th>Description</th>
            <td>{chosen.description}</td>
        </tr>
        <tr>
          <th>Min.Required Age</th>
            <td>{chosen.minRequiredAge}</td>
        </tr>
        <tr>
          <th>Wood Cost</th>
            <td>{chosen.woodCost}</td>
        </tr>
        <tr>
          <th>Food Cost</th>
            <td>{chosen.foodCost}</td>
        </tr>
        <tr>
          <th>Gold Cost</th>
            <td>{chosen.goldCost}</td>
        </tr>
        <tr>
          <th>Build Time</th>
            <td>{chosen.buildTime}</td>
        </tr>
        <tr>
          <th>Reload Time</th>
            <td>{chosen.reloadTime}</td>
        </tr>
        <tr>
          <th>Hit Points</th>
            <td>{chosen.hitPoints}</td>
        </tr>
        <tr>
          <th>Attack</th>
            <td>{chosen.attack}</td>
        </tr>
        <tr>
          <th>Accuracy</th>
            <td>{chosen.accuracy}</td>
        </tr>
    </tbody>
</table>
            </div>
                
            </div>
            </div>
        );
    
}//UN
const mapStateToProps = (state)=>{
    return {
      data : state.data,
      tableFilter: state.tableFilter,
      tableContent: state.tableContent,
      prevTableContent: state.prevTableContent,

    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
        watchAll:  ()=>dispatch({
        type:"ALL",
      }),
    }
  }//mapDis
//export default UnitDetail;
export default connect(mapStateToProps,mapDispatchToProps)(UnitDetail);
