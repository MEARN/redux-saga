import * as actionType from '../type';

const initialState = {
    result:[],
    init:0,
    counter : 6,
    name:''
}

const buttonReducer = (state=initialState,action) => {
    console.log("Button Reducer")
    switch(action.type){
        // case actionType.INCREMENT :
        //     return{
        //         ...state,
        //         counter:state.counter * action.payload
        //     }

        case actionType.STORE_RESULT:
            return{
                ...state,
                result: state.result.concat({key:state.init++,value:action.payload})
            }
        
        case actionType.DELETE_RESULT:
            return{
                ...state,
                result: state.result.filter(count => {
                    return count.value !== action.payload
                })
            }
        
        case actionType.RECIEVED_NAME:
            return{
                ...state,
                name:action.payload
            }
            default:
                    return state
    }
}

export default buttonReducer