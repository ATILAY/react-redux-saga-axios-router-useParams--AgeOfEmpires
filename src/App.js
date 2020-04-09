import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Units from "./components/Units";
import { connect }  from 'react-redux';
import UnitDetail from "./components/UnitDetail";

function App(props) {
  const [tableContent, setTableContent] = useState(props.tableContent)
  
  useEffect(() => {
    props.watchAll() 
  }, [tableContent]);
  return (

      <Router>
            <div className="App">
      <Switch>
                <Route exact path="/units">
                  <Units />
                </Route>
                <Route path="/UnitDetail/:id" component={UnitDetail} />

                
                <Route exact path="/">
                  <Home />
                </Route>
      </Switch>
              </div>
      </Router>
  );
}

//export default App;
const mapStateToProps = (state)=>{
  return {

    tableContent: state.tableContent,

  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
      watchAll:  ()=>dispatch({
      type:"ALL",
      
      
    }),
    watchAfterStart: ()=>dispatch({
      type:"AFTERSTART",
      
    }),

  }
}//mapDispatchToProps

export default connect(mapStateToProps,mapDispatchToProps)(App);

