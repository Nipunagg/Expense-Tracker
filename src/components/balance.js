import React,{useContext} from 'react'
import {globalContext} from '../App'
//var value=0
export const Balance =()=>{
             	const {transactions}=useContext(globalContext)
                const amounts = transactions.map(transaction => transaction.amount);
                const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);   
		    		return (
		    	    <>		
		    	     <h4>Your Balance</h4>           	
                     <h1 id='balance'>{total}</h1>
		    		</>
		    			);
		    	}
		   

