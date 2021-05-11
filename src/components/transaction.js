import React,{useContext} from 'react'
import {globalContext} from '../App'
export const Transaction=(props)=>{
 const {deleteTransaction}=useContext(globalContext)
 const sign = props.transaction.amount < 0 ? '-' : '+';
	return(
        <li className={props.transaction.amount<0 ? 'minus' : 'plus'} >  {props.transaction.text}<span>{sign}{Math.abs(props.transaction.amount)}</span>
        <button onClick={()=>deleteTransaction(props.transaction.id)}className="delete-btn">x</button>
                  </li>
		)
}