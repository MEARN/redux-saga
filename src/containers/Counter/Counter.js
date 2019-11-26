import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onIncremCounter, onDecremCounter, onAdd, onSub, storeRes, deleteRes, getName} from '../../store/counterActions';
import { withRouter } from "react-router";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

     changeRoute =  () => {
        const { history } = this.props;
        this.props.getName('vazanth',history);
    }
    Submit = () => {
        this.props.storeRes(this.props.counter);
    }

    deleteCount = (curvalue) => { 
        console.log("called")
        this.props.deleteRes(curvalue);
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncremCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecremCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub}  />
                <hr />
                {/* <button onClick={() => this.props.storeRes(this.props.counter)}>Submit</button> */}
                <button onClick={this.Submit}>Submit</button>       
                <button onClick={this.changeRoute}>Route</button>
                <hr/>
                <ul>
                    {
                        this.props.result.map( res=> (
                            <li key={res.key} onClick={()=>this.deleteCount(res.value)}>
                                {res.value}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.result)
    return {
        counter : state.rdcr.counter,
        result: state.btnrd.result,
        // resc : state.btnrd.counter
    }
}

const mapDispatchToProps =  {
    // return {
         onIncremCounter,
         onDecremCounter,
         onAdd,
         onSub,
         storeRes,
         deleteRes,
         getName
        // onIncremCounter : () => {dispatch({type:'INCREMENT', payload:1})},
        // onDecremCounter : () => {dispatch({type:'DECREMENT', payload:1})},
        // onAdd : () => {dispatch({type:'ADD', payload:5})},
        // onSub: ()=> {dispatch({type:'SUB', payload:5})},
        // storeRes: (curctr) => {dispatch({type:'STORE_RESULT', payload:curctr})}
    // }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Counter));