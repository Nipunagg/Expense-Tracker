
export const Reducer=(state,action)=>{
	switch(action.type){
		case 'deleteTrans':
		return{
		 ...state,
		 Transactions: state.Transactions.filter(transaction=> transaction.id !== action.payload)
		}
		case 'AddTrans':
		return{
			...state,
			Transactions: [action.payload, ...state.Transactions]
		}
		default:
		return state;
	}
}