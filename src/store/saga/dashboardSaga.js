import axios from 'axios';
import {call, put, push} from 'redux-saga/effects'

export function* dashboardSaga(action){
    const { history } = action.payload;
    const userdata = yield call(apicall,"vazanth")
    console.log(userdata)
    // const username = yield userdata;
    yield put({type:'RECIEVED_NAME', payload:userdata.data.name});
    history.push('/dashboard');
    // yield this.props.history.push('/dashboard');
}

async function apicall(user){
    var  name= await axios.get('https://api.github.com/users/' + user);
    return name;
}

