import { takeEvery } from 'redux-saga/effects';
import {dashboardSaga} from './dashboardSaga';

export function* callapi(){
    yield takeEvery('GETNAME_API',dashboardSaga)
}