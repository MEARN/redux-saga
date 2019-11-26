import * as actionType from '../type';

const initialState = {
    counter : 6
}

const reducer = (state=initialState, action) => {
    console.log("Counter Reducer")
    switch(action.type){
        case actionType.INCREMENT :
            return{
                ...state,
                counter:state.counter + action.payload
            }
        case actionType.DECREMENT:
            return{
                ...state,
                counter:state.counter - action.payload
            }
        case actionType.ADD:
            return{
                ...state,
                counter: state.counter + action.payload
            }
        case actionType.SUB:
            return{
                ...state,
                counter: state.counter - action.payload
            }

        default:
            return state;
    }
}

export default reducer;