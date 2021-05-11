import React,{useContext} from 'react'
import {globalContext} from '../App'
import {Transaction} from './transaction'

export const Tl=()=>{
     const {transactions}=useContext(globalContext);
	return(
		<>
	       <h3>History</h3>
           <ul className="list">  
            {transactions.map(transaction=>(<Transaction key={transaction.id} 
                   transaction={transaction}/>))
                  
             } 
            </ul>
            </>
		)
}