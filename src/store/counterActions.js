// export const onIncremCounter = (dispatch) => {
//     dispatch({type:'INCREMENT', payload:1})
// }

// export const onDecremCounter = (dispatch) => {
//     dispatch({type:'DECREMENT', payload:1})
// }

// export const onAdd = (dispatch) => {
//     dispatch({type:'ADD', payload:5})
// }

// export const onSub = (dispatch) => {
//     dispatch({type:'SUB', payload:5})
// }

// export const storeRes = (curctr,dispatch) => {
//     dispatch({type:'STORE_RESULT', payload:curctr})
// }

export const onIncremCounter = () => ({type:'INCREMENT', payload:2})
export const onDecremCounter = () => ({type:'DECREMENT', payload:1})
export const onAdd = () =>  ({type:'ADD', payload:5})
export const onSub = () => ({type:'SUB', payload:5})
export const storeRes = (curctr) => ({type:'STORE_RESULT', payload:curctr})
export const deleteRes = (curctr) => ({type:'DELETE_RESULT', payload:curctr})
export const getName = (name, history) => ({type:'GETNAME_API',payload: {name,history}})