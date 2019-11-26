import React from 'react';

import {connect} from 'react-redux'

const dashboard = (props) => {
    return(
        <div>
           Value: {props.name}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('dashboard',state)
    return{
        name : state.btnrd.name
    }
}

export default connect(mapStateToProps)(dashboard)