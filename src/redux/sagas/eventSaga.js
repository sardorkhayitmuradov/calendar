import { takeEvery, call, put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/events';

function* fetchEvents() {
    try {
        const response = yield call(axios.get, apiUrl);
        yield put({ type: actionTypes.FETCH_EVENTS_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: actionTypes.FETCH_EVENTS_FAILURE, payload: error.message });
    }
}

function* createEvent(action) {
    try {
        const response = yield call(axios.post, apiUrl, action.payload);
        yield put({ type: actionTypes.CREATE_EVENT_SUCCESS, payload: response.data });
    } catch (error) {
        yield put({ type: actionTypes.CREATE_EVENT_FAILURE, payload: error.message });
    }
}

function* deleteEvent(action) {
    try {
        yield call(axios.delete, `${apiUrl}/${action.payload}`);
        yield put({ type: actionTypes.DELETE_EVENT_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: actionTypes.DELETE_EVENT_FAILURE, payload: error.message });
    }
}

export default function* eventSaga() {
    yield takeEvery(actionTypes.FETCH_EVENTS_REQUEST, fetchEvents);
    yield takeEvery(actionTypes.CREATE_EVENT_REQUEST, createEvent);
    yield takeEvery(actionTypes.DELETE_EVENT_REQUEST, deleteEvent);
}