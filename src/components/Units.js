import React, {Component} from "react"
import Nav from "./Nav";
import { connect }  from 'react-redux';
import { store } from "../redux/store"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import UnitDetail from "./UnitDetail";
function ComeOnRenderNow(props){
    if(props.elem){
    return (
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Cost</th>
        </tr>
    </thead>
    <tbody>
     { props.elem.map(el => el) }
    </tbody>
    </table>
    );
}//if
}//come

class Units extends Component{
    constructor(props){
        super(props);
        this.state = {newRender: [], tableContent: []};
        this.renderTableNow = this.renderTableNow.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeAfterStart = this.handleChangeAfterStart.bind(this);
    }//con
    //
    renderTableNow(newTableContent){
        // while( newTableContent.length !== 104 && (newTableContent.length -1).cost.Gold !== ''){
        //     let i = 0
        //     console.log(i)
        // }
        console.log(newTableContent)
        if(newTableContent){
            let newRender =  newTableContent.map(item => (
            <tr key ={item.id}>
            
            <th scope="row">{item.id}</th>
            <td key={item.name}><Link key={item.id} to={`/UnitDetail/${item.id}`}>{item.name} </Link></td>
            <td key={item.age}>{item.age}</td>
            <td key={Math.random()*1000}>Wood: {item.cost.Wood?item.cost.Wood:0} Food: {item.cost.Food?item.cost.Food:0} Gold: {item.cost.Gold?item.cost.Gold:0}</td>
            
            </tr>
            
            ));
            this.setState({ newRender});
        }//if newTable
    }//rend
    //
    handleChangeWood = (e)=>{
        this.props.watchWoodCheck(e.target.checked);
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);

    }
    handleChangeFood= (e)=>{
        this.props.watchFoodCheck(e.target.checked);
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);

    }
    handleChangeGold= (e)=>{
        //const value = e.target.checked;
        //this.setState({goldChecked: value});
        this.props.watchGoldCheck(e.target.checked);
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
        console.log(e.target)
    }
    handleChangeWoodRange= (e)=>{
        //event.target.value
        this.props.watchWoodRange(e.target.value);
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
    }
    handleChangeFoodRange= (e)=>{
        this.props.watchFoodRange(e.target.value);
        //console.log(e.target.value);
        
        this.renderTableNow(this.props.tableContent);
    }
    handleChangeGoldRange= (e)=>{
        //this.setState({goldRange: e.target.value});
       
        this.props.watchGoldRange(e.target.value);
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
        
    }
    handleChangeAll=(e)=>{
        this.props.watchAll();
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
    }
    handleChangeDark=(e)=>{
        this.props.watchDark("DARK");
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
    }
    handleChangeFeudal=(e)=>{
        e.preventDefault();
        this.props.watchFeudal("FEUDAL");
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
    }
    handleChangeCastle=(e)=>{
        this.props.watchCastle("CASTLE");
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
    }
    handleChangeImperial=(e)=>{
        this.props.watchImperial("IMPERIAL");
        let newTableContent = this.props.tableContent;
        this.renderTableNow(newTableContent);
    }
    handleChangeAfterStart(){
        let newTableContent = this.props.tableContent;
        console.log(newTableContent);
        this.renderTableNow(newTableContent);
    }//afterst
    handleChangeStart(){
        this.props.watchAll();
        this.handleChangeAfterStart();

    }
    componentDidMount(){
        this.handleChangeStart()
        // async function letsDo(){
        //     await this.handleChangeStart().then(()=>{
        //         this.handleChangeAfterStart()
        //     })
        // }//let
        // letsDo()

            //store.dispatch({type:"ALL"});
            // this.props.watchAll();

            //     this.timer = setTimeout(
            //         () => {
            //             this.renderTableNow(this.props.tableContent);
            //             console.log(this.props.tableContent);
            //         },
            //         1200,
            //     );
            
        
    }//compDid
    componentWillUnmount() {
        // clearTimeout(this.timer);
    }
    render(){
        
        return (
            
            <div className="App">
            <div className="container">
            <Nav/>
            <div className="row filter  mt-5 pt-5 align-content-center">
                {/* AGES */}
                <div className="col">
                <div className="row d-block">
                <div className="col">
                    <div className="d-block m-2 text-left">Ages</div>
                    <div className="d-flex buttons">
                    
                        <button className="btn btn-primary" onClick={e=>this.handleChangeAll(e)}>ALL</button>
                        <button className="btn btn-primary" onClick={e=>this.handleChangeDark(e)}>DARK</button>
                        <button className="btn btn-primary" onClick={e=>this.handleChangeFeudal(e)}>FEUDAL</button>
                        <button className="btn btn-primary" onClick={e=>this.handleChangeCastle(e)}>CASTLE</button>
                        <button className="btn btn-primary" onClick={e=>this.handleChangeImperial(e)}>IMPERIAL</button>
                    </div>
                </div>
                </div>
                                {/* COSTS */}
                <div className=" row d-block">
                <div className="col">
                <div className="d-block m-2 text-left">Cost</div>
                <div className="d-flex">
                    <div className="row ">
                        <div className="col-md-3 checkboxes mr-3">
                            <div className="row flex-column">
                                    {/* wood */}
                                <div className="form-group wood">
                                <div className="d-block">
                                <input type="checkbox" name="wood"
                                id="wood" checked={this.props.tableFilter.woodChecked}
                                onChange= {(e)=>this.handleChangeWood(e)}
                                />
                                <label htmlFor = "wood">Wood</label>
                                </div>
                                </div>
                                    {/*  */}
                                    {/* food */}
                                <div className="form-group food">
                                <div className="d-block">
                                    <input type="checkbox" name="food"
                                id="food" checked={this.props.tableFilter.foodChecked}
                                onChange= {(e)=>this.handleChangeFood(e)}
                                />
                                <label htmlFor = "food">Food</label>
                                </div>
                                </div>
                                    {/*  */}
                                    {/* gold */}
                                <div className="form-group gold">
                                <div className="d-block">
                                <input type="checkbox" name="gold"
                                id="gold" checked={this.props.tableFilter.goldChecked}
                                onChange= {(e)=>this.handleChangeGold(e)}
                                />
                                <label htmlFor = "gold">Gold</label>
                                </div>
                                </div>
                                    {/*  */}
                            </div>
                        </div>

                        <div className="col-md-8 ranges">
                        {/* wood range */}
                        <div className="form-group wood">
                            <input type="range" name="woodRange" min={this.props.tableFilter.minwoodRange} max={this.props.tableFilter.maxwoodRange}
                            id="woodRange" value={this.props.tableFilter.woodRange} onChange={e=>{this.handleChangeWoodRange(e)}} className="form-control" />
                            {/* <label htmlFor="woodRange">
                            woodRange ${this.state.woodRange}
                            </label> */}           
                        </div>
                        {/*  */}
                        {/* food range */}
                        <div className="form-group food">
                            <input type="range" name="foodRange" min={this.props.tableFilter.minfoodRange} max={this.props.tableFilter.maxfoodRange}
                            id="foodRange" value={this.props.tableFilter.foodRange} onChange={e =>{this.handleChangeFoodRange(e)}} className="form-control" />
                            {/* <label htmlFor="woodRange">
                            woodRange ${this.state.woodRange}
                            </label> */}           
                        </div>
                        {/*  */}
                        {/* food range */}
                        <div className="form-group gold">
                            <input type="range" name="goldRange" min={this.props.tableFilter.mingoldRange} max={this.props.tableFilter.maxgoldRange}
                            id="goldRange" value={this.props.tableFilter.goldRange} onChange={e=>{this.handleChangeGoldRange(e)}} className="form-control" />
                            {/* <label htmlFor="woodRange">
                            woodRange ${this.state.woodRange}
                            </label> */}           
                        </div>
                        {/*  */}

                        </div>
                        {/*  */}
                        {/* <div className="col">
                            s
                        </div>
                        <div className="col">
                            s
                        </div> */}
                        
                    </div>
                    </div>
                </div>
                </div> 
                </div>
            </div>
            {/* TABLE */}
            <div className="row">TABLE

                    <ComeOnRenderNow elem={this.state.newRender} />
                    
        {/* <Switch>
          <Route path="/UnitDetail/:id" component={UnitDetail} />
        </Switch> */}

            </div>
            {/*  */}
            </div>
            </div>
        );
    }
} 
//export default Units;
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
        watchDark: (controller)=>dispatch({
        type:"DARK",
        controller
      }),
        watchFeudal:  (controller)=>dispatch({
        type:"FEUDAL",
        controller
        
      }),
        watchCastle: (controller)=>dispatch({
        type:"CASTLE",
        controller
      }),
      watchImperial:  (controller)=>dispatch({
        type:"IMPERIAL",
        controller
        
      }),
        watchWoodCheck: (controller)=>dispatch({
        type:"WOODCHECK",
        controller
      }),
      watchFoodCheck:  (controller)=>dispatch({
        type:"FOODCHECK",
        controller
        
      }),
        watchGoldCheck: (controller)=>dispatch({
        type:"GOLDCHECK",
        controller
      }),
      watchWoodRange:  (controller)=>dispatch({
        type:"WOODRANGE",
        controller
        
      }),
        watchFoodRange: (controller)=>dispatch({
        type:"FOODRANGE",
        controller
      }),
      watchGoldRange: (controller)=>dispatch({
        type:"GOLDRANGE",
        controller
      }),
      watchAfterStart: ()=>dispatch({
        type:"AFTERSTART",
        
      }),

    }
  }//mapDispatchToProps
  
  export default connect(mapStateToProps,mapDispatchToProps)(Units);
  
