import React,{useContext} from 'react'
import {globalContext} from '../App'
import {useState} from 'react'

export const Addlist=()=>{
          
	    const [text,setText]=useState("");
        const [amount,setAmount]=useState("");
        const {addTransaction}=useContext(globalContext);
        function onSubmit(e)
        {
           e.preventDefault();
          const newtransaction={
            id: Math.floor(Math.random()*1000000),
            text: text,
            amount: +amount,
          }
          setText("");
          setAmount("");
             addTransaction(newtransaction);
          
        }
        
	return(
		
		  <>
           <h3>Add new transaction</h3>
           <form onSubmit={onSubmit}>
               <div className="form-control">
                 <label htmlFor="text">Text</label>
                 <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." />
               </div>
               <div className="form-control">
                 <label htmlFor="amount">Amount <br />
                   (negative - expense, positive - income)</label>
                 <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
               </div>
              <button className ="btn">Add transaction</button>
          </form>
         </> 
		)
}