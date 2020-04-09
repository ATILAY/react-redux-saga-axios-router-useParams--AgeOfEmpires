
const initialState = {
    data:null,
    tableFilter: {
        btnController: 'ALL',
        woodChecked: false,
        foodChecked: false,
        goldChecked: false,
        woodRange: 0,
        minwoodRange:0,
        maxwoodRange: 200,
        foodRange: 0,
        minfoodRange:0,
        maxfoodRange: 200,
        goldRange: 0,
        mingoldRange:0,
        maxgoldRange: 200,
    },
    tableContent:[],
    prevTableContent: [],
    notTouch:[],
    loading: true
};

const reducer = (state = initialState, action)=>{
   

    switch(action.type){
        case "ALL_ASYNC":
            let temp = {
                ...state,
                data:  action.val,
                tableContent: action.val,
                notTouch: action.val,
            };
            //console.log(temp.tableContent)
            return temp;
        case "ALL":
                //console.log(state)
                //newState.age = newState.age - action.val;
                return {...state,
                // data:  state.data,
                // tableContent: state.tableContent,
                // notTouch:state.tableContent,
            };
            //AFTERSTART
        case "AFTERSTART":
                console.log(state.tableContent)
                //newState.age = newState.age - action.val;
                return {...state,
                // data:  state.data,
                // tableContent: state.tableContent,
                // notTouch:state.tableContent,
            };
        case "DARK":
                //newState.age = newState.age - action.val;
                return {...state,
                    tableContent: state.notTouch.filter(item => (item.age.search("Dark")) > -1),
                    //tableFilter: {...state.tableFilter, btnController: action.controller},

            };
        case "FEUDAL":
                //newState.age = newState.age - action.val;
                return {...state,
                    tableContent: state.notTouch.filter(item => item.age === "Feudal"),
                    //tableFilter: {...state.tableFilter, btnController: action.controller},

            };
        case "CASTLE":
                //newState.age = newState.age - action.val;
                return {...state,
                    tableContent: state.notTouch.filter(item => item.age === "Castle"),    
                };
        case "IMPERIAL":
                //newState.age = newState.age - action.val;
                return {...state,
                    tableContent: state.notTouch.filter(item => item.age.toString() === "Imperial")

            };
        case "WOODCHECK":
            if((action.controller)){
                
                return {...state,
                    tableFilter: {...state.tableFilter, woodChecked: action.controller},
                    prevTableContent: state.tableContent,
                    tableContent: state.notTouch.filter(item => item.cost.hasOwnProperty('Wood'))
                }
                }else{
                    return {
                        ...state,
                        tableFilter: {...state.tableFilter, woodChecked: action.controller},
                        tableContent: state.prevTableContent
                    }
                }//else
        case "FOODCHECK":
            console.log(action.controller)
            console.log(state.notTouch.map(item => item.cost))
            if((action.controller)){
                
                return {...state,
                    prevTableContent: state.tableContent,
                    tableFilter: {...state.tableFilter, foodChecked: action.controller},
                    tableContent: state.notTouch.filter(item => item.cost.hasOwnProperty('Food'))
                    }
                }else{
                    return {
                        ...state,
                        tableFilter: {...state.tableFilter, foodChecked: action.controller},
                        tableContent: state.prevTableContent
                    }
                }//else
        case "GOLDCHECK":
            if((action.controller)){
                
                return {...state,
                    prevTableContent: state.tableContent,
                    tableFilter: {...state.tableFilter, goldChecked: action.controller},
                    tableContent: state.notTouch.filter(item => item.cost.hasOwnProperty('Good'))
                }
                }else{
                    return {
                        ...state,
                        tableFilter: {...state.tableFilter, goldChecked: action.controller},
                        tableContent: state.prevTableContent
                    }
                }//else
        case "WOODRANGE":
                if(state.woodChecked){
                //Kullanıcı bir cost tipini seçtiğinde yanındaki range selector aktif edilecek ve kullanıcı bir cost aralığı seçebilecek.
                //let parsed =  parseInt(item.cost.Wood);
                return {...state,
                 tableFilter: {...state.tableFilter, woodRange: action.controller},
                 tableContent: state.tableContent.filter(item => parseInt(item.cost.Wood) <= state.woodRange ) 
                  }
                }else{
                return {...state,
                    tableFilter: {...state.tableFilter, woodRange: action.controller},

                }
                }//else
        case "FOODRANGE":
            if(state.foodChecked){
                //Kullanıcı bir cost tipini seçtiğinde yanındaki range selector aktif edilecek ve kullanıcı bir cost aralığı seçebilecek.
                console.log(action.controller)
                return {
                ...state,
                tableFilter: {...state.tableFilter, foodRange: action.controller},
    
                 tableContent: state.tableContent.filter(item => (parseInt(item.cost.Food) <= action.controller) )                    
                }
                }else{
                return {...state,
                    tableFilter: {...state.tableFilter, foodRange: action.controller},
                }
                }//else
        case "GOLDRANGE":
            if(state.goldChecked){
                //Kullanıcı bir cost tipini seçtiğinde yanındaki range selector aktif edilecek ve kullanıcı bir cost aralığı seçebilecek.
                return {
                    ...state,
                    tableFilter: {...state.tableFilter, goldRange: action.controller},
                 tableContent: state.tableContent.filter(item => parseInt(item.cost.Gold) <= state.goldRange )                    
                }
                }else{
                return {...state,
                    tableFilter: {...state.tableFilter, goldRange: action.controller},
                }
                }//else
        default:
            return state;

    }
}

export default reducer;