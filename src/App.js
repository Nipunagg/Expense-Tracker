import React,{createContext,useReducer} from 'react';
import './App.css';
import {Header} from './components/header'
import {Balance} from './components/balance'
import {Incomexpense} from './components/income-expense'
import {Tl} from'./components/transactionlist'
import {Addlist} from './components/addlist'
import {Reducer} from './components/reducer'
const inititalstate={
Transactions: []
}
 export const globalContext=createContext(inititalstate);

function App() {

   const [state,dispatch]= useReducer(Reducer,inititalstate)
   function deleteTransaction(id){
    dispatch({
      type:'deleteTrans',
      payload: id
    });
   }
    function addTransaction(transaction){
    dispatch({
      type:'AddTrans',
      payload: transaction
    });
   }
   
  return (
  	<globalContext.Provider value={{transactions: state.Transactions,deleteTransaction,addTransaction}}>
    <div className="App">
      <Header/>
      <Balance/>
      <Incomexpense/>
      <Tl/>
      <Addlist/>
    </div>
    </globalContext.Provider>
  );
}

export default App;
