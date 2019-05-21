export const EVENTS_RECEIVED = "EVENTS_RECEIVED";

const initialState = {
  events: []
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_RECEIVED:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
};

export default events;
