import * as actionTypes from './actionTypes';

export const fetchEventsRequest = () => ({
    type: actionTypes.FETCH_EVENTS_REQUEST
});

export const fetchEventsSuccess = (events) => ({
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    payload: events,
});

export const fetchEventsFailure = (error) => ({
    type: actionTypes.FETCH_EVENTS_FAILURE,
    payload: error,
});

export const createEventRequest = (event) => ({
    type: actionTypes.CREATE_EVENT_REQUEST,
    payload: event,
});

export const createEventSuccess = (event) => ({
    type: actionTypes.CREATE_EVENT_SUCCESS,
    payload: event,
});

export const createEventFailure = (error) => ({
    type: actionTypes.CREATE_EVENT_FAILURE,
    payload: error,
});

export const deleteEventRequest = (id) => ({
    type: actionTypes.DELETE_EVENT_REQUEST,
    payload: id,
});

export const deleteEventSuccess = (id) => ({
    type: actionTypes.DELETE_EVENT_SUCCESS,
    payload: id,
});

export const deleteEventFailure = (error) => ({
    type: actionTypes.DELETE_EVENT_FAILURE,
    payload: error,
});