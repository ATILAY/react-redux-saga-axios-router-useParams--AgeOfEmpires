import  { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware  from 'redux-saga'
import {rootSaga} from './sagas'



const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware) );
sagaMiddleware.run(rootSaga);


store.subscribe( ()=>{
   // console.log('state changed'+ JSON.stringify(store.getState()) );

} );

//store.dispatch({type: "AGE_UP", val: 10});
//store.dispatch({type: "SUBSTRACT", val:5});


//console.log(store.getState());