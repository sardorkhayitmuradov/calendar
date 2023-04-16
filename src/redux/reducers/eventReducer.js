import * as actionTypes from '../actions/actionTypes';

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case actionTypes.FETCH_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.CREATE_EVENT_REQUEST:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case actionTypes.DELETE_EVENT_REQUEST:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload),
      };
    default:
      return state;
  }
};

export default eventReducer;